# React Bits

The PixelSnow, Lanyard, AccordionGallery and FolderFloat sources were supplied by the user
from React Bits (https://reactbits.dev). The included license applies.

PixelSnow's renderer and Lanyard's geometry and physics are separated into local
modules to keep every source file below 800 lines. Their original algorithms are
preserved. The gallery adds project descriptions, keyboard navigation and a
selection callback for the existing portfolio detail modal. ProfileLanyard uses
the existing photo and introduction to draw the card texture locally.

FolderFloat groups the skills into interactive folders. It adds controlled open
state, skill icons, keyboard focus and outside-click closing. The floating items
render in a viewport-contained portal so opening a folder never moves the grid.
Its Matter.js animation respects reduced-motion preferences.
