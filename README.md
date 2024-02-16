# Document Reviewer App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## Code Structure

The `App.js` has the main view component which is a combination of several small components.
There are shared components which can be used all across the app with required props.
There are utility files which have some util functions.
There is a constants folder which have constants for data dump and components.
There is a view folder to hold all the components required for the main view.
index.css has the configs of all global CSS variables for theames.
`To add more pages, please go to src/constants/pages-data.js and uncomment the 2nd object.`

### Shared Components

#### Button

This has the html button component with three given sizes and a type. The default size is chosen if the size prop is not passed.

#### Checkbox

This controlled component wraps input type `checkbox`. This can be directly used by calling `<Checkbox label='not required'></Checkbox>`.

#### Modal

This is a popup box which creates an overlay with the help of CSS. This also has two general pop up box components called message box and confirmation box which can be used for confirmation and just showing a message by just passign the required props. 

#### Popover

This component can be used to create a small popup without any overlay using a trigger. This is used to access the remove button by triggering the more button in the sidebar of this app.

#### Tabs

This component wraps `<ul>` to make switchable tabs. It can have multiple children (tab) inside it.

#### Tags

This is a simple div with multi coloured background options. By passing the label (text inside it) and type (from a range of defined types) this can be accessed.

### Utils

This has a code-utils file which has a couple of reusable functions, namely, `initialsCreator` and `getRandomItem`. These are used to get the first letters of every word in the given sentance and to select a random item from an array.

### View Components

This has one main component named Reviewer. This has all the small components assembled inside it to make the document reviewer.

#### Header

This has the main header which contains the Checkbox for switching the theame.

#### Previewer

This has the left side of the view which wraps the `ImageViewer` component and box creator for highlighting the fields.

#### Sidebar

This has the right side of the view which wraps the FieldCards component being mapped from the data dump inside the `Tabs` component. This has the `SidebarFooter` which contains the action buttons. 

#### Zoomer

This component has a fixed positioned div which has two buttons for zooming in and out. They work on the CSS `transform` property of `scale`.

