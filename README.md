# vstest

## Components Description:
### ActionComp
It is the core of the project. It manages the logic from the child components to the root component and it provides all parameters for the http requests.

### ActionResearch
It contains an input element for filtering the list of images according to the user's research.

### ActionPages
It contains an input element for setting the number of images per pages.

### ActionNavigation
It allows to browse the gallery page by page.


## View Component Description:
### GalleryImages
It is the images gallery.

### App
It contains Axios http requests.


## Libraries:
  - axios             // Http request
  - fortawesome       // Icons  
  - lodash            // Utility library (for future implementations)
  - vue-router        // Routing (for future implementations)


## Issues:
  - Browsing page by page there are continuous requests to the server and this causes a slowdown in performance.

  - It was not possible to determine in advance the number of pages according to the limit of images per page. It is because the             server does not provide the list of all the images.


## Solutions:
  - To use libraries such as: https://www.npmjs.com/package/vue-debounce or https://www.npmjs.com/package/debounce-promise (to    v         verify!!!!)
  
  - To set the total number of all images in the server and dynamically calculate the number of pages with the formula:
  ```js
    let totNumPages = Math.ceil(totImages / imagesPerPage);
  ```
  
  
  
