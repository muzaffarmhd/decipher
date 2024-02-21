from PIL import Image

# Open the PNG file
image = Image.open(r'C:\Users\mdmux\Desktop\muzaffarmhd\COSC\DECIPHER\ESCAPEROOM\images\question1.jpg')

# Add metadata (arbitrary text content)
metadata = "Are you looking for a key? It's 'February'"
image.info["Description"] = metadata

# Save the modified PNG file
image.save("question1_final.jpg")

# Close the image
image.close()
