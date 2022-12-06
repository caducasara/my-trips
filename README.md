# My Trips

## About the project

Hello how are you? :D
Welcome to My Trips, this is a project I developed for the purpose of studying with React, Next and GraphQL Stacks. The project consists of an application where I can mark on the map places I have already visited and places I would like to visit, a page to access information about each location and a page talking a little about the application.

For development, in addition to the stacks that were mentioned before, some libraries were also used to assist in development, such as [Leaflet](https://leafletjs.com/), [React Leaflet](https://react-leaflet.js.org/), [MapBox](https://www.mapbox.com/) and [GraphCMS](https://hygraph.com/).

With the development of this application I managed to put into practice the development of a PWA, a better SEO configuration with Next, and also train concepts of page architecture and properties with SSR. [text](filename.md#anchortext)

# Application pages exemple
<br>

## Home Page

On the home page there is a map where there are blue and red markers, demarcating places that I have already visited and places that I would like to visit. We also have a legend where it indicates what each color of the paths indicates.
We can also find in the upper right corner a button that takes us to the about page.
<br>
<br>
![Home Page](./src/assets/home-page.png)
<br>
<br>

## Place Page

When we click on any of the markers found on the Home, we are redirected to the Places page, on this page the name of the place will be presented, a small paragraph talking about it, and a compilation of photos of the place.
<br>
<br>
![Place Page](./src/assets/place-page.png)
<br>
<br>

## About Page

This page is just a page explaining a little about what the application is.
<br>
<br>
![About Page](./src/assets/about-page.png)
<br>
<br>

# How to start the project:

After cloning this project on your machine, you will need to install the project's dependencies. You can do this by going to the project root and running the commands in your terminal:

```bash

If you use npm
$ npm install

If you use yarn
$ yarn

```

After installing the project's dependencies, just run the following commands to start the application locally:

```bash

If you use npm
$ npm run dev

If you use yarn
$ yarn dev

```

OBS: To access your application, access http://localhost:3000/ in your preferred browser.

# Access this App:
You can also access this application through the link: https://my-trips-rouge.vercel.app/
