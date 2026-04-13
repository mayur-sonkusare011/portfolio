import cv2
import numpy as np

img = cv2.imread('public/images/profile.jpg')
if img is None:
    print("Could not read image")
    exit(1)

# Add a border to allow floodfill to wrap around the person if needed
img_border = cv2.copyMakeBorder(img, 1, 1, 1, 1, cv2.BORDER_CONSTANT, value=[255, 255, 255])

mask = np.zeros((img_border.shape[0]+2, img_border.shape[1]+2), np.uint8)
# Flood fill from the top-left corner (0,0 of the border)
cv2.floodFill(img_border, mask, (0,0), (0,0,0), (20,20,20), (20,20,20), cv2.FLOODFILL_MASK_ONLY)

# The mask includes the border (which is the first and last row/col)
# We crop it to match the original image size
mask = mask[2:-2, 2:-2]

# Optionally soften the mask
mask = cv2.GaussianBlur(mask, (3, 3), 0)

img_bgra = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
# mask is 1 where background was found, so we make alpha 0 there
img_bgra[mask >= 1, 3] = 0

cv2.imwrite('public/images/profile-transparent.png', img_bgra)
print("Background removed and saved to profile-transparent.png")
