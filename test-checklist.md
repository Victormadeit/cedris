# Design Editor Test Checklist

Open `design-yourself.html` in your browser and test:

## ✅ Basic Functionality
- [ ] Page loads without errors
- [ ] Console shows "DOM loaded, initializing design editor..."
- [ ] Console shows "All elements found, setting up functionality..."
- [ ] Console shows "Initial state saved"
- [ ] Console shows tint initialization

## ✅ Product Selection
- [ ] Dropdown shows all product options (T-Shirt, Hoodie, Mug, Plate, Feather Flag, Banner)
- [ ] Changing product updates the base image in the preview
- [ ] Console logs "Product changed to: [filename]"

## ✅ Color Controls
- [ ] Color picker changes the tint color overlay
- [ ] Console logs "Color changed to: [hex color]"
- [ ] Opacity slider changes how strong the color tint appears
- [ ] Console logs "Opacity changed to: [value]"

## ✅ Artwork Upload
- [ ] File input accepts image files
- [ ] Console logs "File selected: [filename]" when file is chosen
- [ ] Console logs "File loaded, displaying artwork" when image loads
- [ ] Uploaded image appears in the center of the product mockup
- [ ] Artwork can be dragged to different positions
- [ ] Size slider changes the artwork scale
- [ ] "Center artwork" button resets position and scale
- [ ] "Remove artwork" button hides the image

## ✅ Text Functionality
- [ ] Switch to "Text" tab shows text controls
- [ ] Typing in text input shows text on the product
- [ ] Text color picker changes text color
- [ ] Background color and opacity controls work
- [ ] Font family dropdown changes text font
- [ ] Text size slider changes font size
- [ ] Bold and italic checkboxes work
- [ ] Text can be dragged to different positions
- [ ] "Center text" and "Remove text" buttons work

## ✅ History (Undo/Redo)
- [ ] Undo button works to revert changes
- [ ] Redo button works to restore undone changes

## ✅ Order Process
- [ ] "Order this design" button creates order draft
- [ ] Clicking order button navigates to order.html
- [ ] Order page shows the design summary correctly

## 🐛 If Something Doesn't Work
1. Open browser developer tools (F12)
2. Check Console tab for error messages
3. Verify all image files exist in the same folder
4. Try refreshing the page

The design editor should now work completely without any backend dependencies!
