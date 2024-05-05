# LiUm

## Group Members:

- Ellen Sandqvist
- Ali Esmaeeli
- Anna-Sara Isakson
- Alexander Soderwall
- Johan Söderlund
- Alexander Kuiper

## features tips

- labels can be added to the tasks, both visible on the task popup and the task card on the board
- Styling, there is a lot of styling that can be improved and more custom options on the settings side can be added
- Background image, the option is already on the settings part but is currently not working
- The app isnt responsive, a task can be to make the app more responsive on each site

## functionality

Our kanban board works with 3 layers of redux, tasks, columns and users. These are all stored in the localstorage as well so when a page reloads, the user still has access to their data. We have decided to always have 1 user logged in as a "active user", you can swap active users by clicking on other portraits. They can use the setting page to make their board more personolized. Each column can be renamed and multiple columns can be created and columns can be removed. Tasks can be dragged to each column but also have a dropdown menu to assigned them from their to other columns.
