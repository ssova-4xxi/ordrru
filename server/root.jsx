import React, { Component, PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';
import serialize from 'serialize-javascript';
import DocumentMeta from 'react-document-meta';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
class Root extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {assets, component, store, locale, referenceDatetime} = this.props;
    const content = component ? ReactDOMServer.renderToString(component) : '';

    return (
      <html lang={locale}>
      <head>
        {DocumentMeta.renderAsReact()}

        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {
          Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} media="screen, projection"
                rel="stylesheet" type="text/css" charSet="UTF-8"/>)
        }

        <script src="https://api.mapbox.com/mapbox.js/v2.2.3/mapbox.js"></script>
        <link href="https://api.mapbox.com/mapbox.js/v2.2.3/mapbox.css" rel="stylesheet" />
      </head>
      <body>
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <symbol id="icon-icehole" viewBox="0 0 1024 1024">
            <title>icehole</title>
            <path className="path1" d="M228.809 10.332c-2.392 2.392-4.195 10.777-4.195 18.562 0 11.976-2.392 13.771-19.16 12.575-25.147-2.392-30.532 15.565-8.38 26.344 14.369 5.989 14.967 7.782 7.782 19.16-4.793 7.184-7.184 16.163-5.989 19.76 3.592 10.777 22.749 9.576 31.728-1.196 7.184-8.38 8.978-8.38 17.962 0 21.553 19.76 42.508 0.598 22.749-20.358-5.391-5.989-5.989-8.978-1.196-10.777 32.332-11.976 34.725-41.91 2.392-35.921-15.565 3.592-17.358 1.794-19.16-12.575-1.794-15.565-15.565-23.945-24.543-15.565z" />
            <path className="path2" d="M821.525 52.243c-2.392 2.392-4.195 10.777-4.195 19.16 0 11.976-2.392 13.771-12.575 11.38-17.358-4.793-29.336 1.196-29.336 14.369 0 7.184 5.391 12.575 14.967 14.967 15.565 3.592 19.16 10.777 8.978 17.358-7.782 4.793-7.782 25.147 0.598 29.934 3.592 2.392 11.976-1.196 19.76-8.38l13.173-12.575 12.575 12.575c7.184 7.184 15.565 10.777 19.16 8.978 8.38-5.391 8.38-25.747 0.598-30.532-9.576-5.989-7.184-13.173 5.989-16.76 14.967-4.195 22.151-21.553 11.38-28.738-4.793-2.392-14.369-3.592-21.553-1.794-10.777 2.989-13.173 0.598-14.967-13.771-1.794-16.163-15.565-25.147-24.543-16.163z" />
            <path className="path3" d="M491.598 187.55c-4.195 4.195-7.184 12.575-7.184 18.562 0 8.978-2.989 10.777-14.369 7.782-8.978-2.392-16.76 0-22.151 5.989-6.587 8.38-5.989 10.777 2.989 17.962 5.989 4.195 14.369 8.978 17.962 10.174 4.793 1.794 4.195 4.793-0.598 10.777-10.777 10.777-9.576 27.54 1.196 31.728 4.793 1.794 13.771-2.392 20.358-8.978l11.38-12.575 13.173 13.173c11.976 11.976 14.369 12.575 22.749 4.195s8.38-10.777-0.598-23.945c-9.576-14.369-8.978-14.967 5.391-18.562 11.38-2.989 14.967-7.184 13.173-17.358-1.196-10.777-5.391-13.173-20.956-11.976-16.76 1.794-19.16-0.598-20.956-14.369-1.794-17.962-10.777-23.347-21.553-12.575z" />
            <path className="path4" d="M65.987 412.060c-2.392 1.794-4.195 10.174-4.195 17.962 0 12.575-2.392 14.369-19.16 12.575-16.163-1.196-20.358 0.598-21.553 11.38-1.196 8.38 1.794 13.771 10.174 16.76 14.369 4.195 16.163 14.967 5.391 25.747-5.391 5.391-4.793 9.576 2.989 17.358 9.576 9.576 10.777 8.978 23.945-2.989l14.369-13.771 8.978 13.173c5.391 8.978 11.976 11.976 18.562 9.576 11.38-4.195 13.771-25.147 4.195-31.129-8.978-5.391-7.184-14.967 2.392-14.967 4.195 0 11.38-4.195 15.565-8.978 10.777-13.173-2.989-28.138-21.553-23.347-11.38 2.989-14.369 1.196-14.369-7.782 0-17.358-16.163-31.129-25.747-21.553z" />
            <path className="path5" d="M384.474 395.391c-22.749 17.962-28.138 46.098-28.138 141.297v84.42l-43.106 7.782c-126.928 22.151-231.696 77.832-262.834 138.297-50.888 100.58 64.659 196.373 284.984 236.487 82.624 14.967 275.405 15.565 356.23 0.598 225.715-41.91 339.465-135.308 287.974-237.085-31.129-60.467-135.906-116.145-262.236-138.297l-43.705-7.782v-97.591c0-92.797 0.598-98.189 12.575-104.178 20.358-11.38 39.517-2.392 47.302 20.956 11.38 34.725 38.913 22.749 28.738-13.173-6.587-25.747-31.129-43.705-58.073-43.705-44.303 0-66.453 32.932-66.453 98.787v38.913h-245.466v-44.303c0-46.098 7.782-63.463 27.54-63.463 15.565 0 32.332 11.976 32.332 23.347 0 5.989 4.195 14.369 9.576 18.562 7.184 6.587 10.777 6.587 17.962-1.196 8.38-7.782 8.38-11.38 0.598-29.934-4.793-11.976-14.967-25.747-22.749-31.129-19.76-13.173-54.486-11.976-73.039 2.392zM637.732 582.185v31.728h-245.466v-62.867h245.466v31.129zM606.593 644.454l31.129 4.195v46.098h-245.466v-23.347c0-23.347 0.598-23.945 22.749-26.344 38.913-4.195 158.655-4.195 191.587-0.598zM356.335 717.493v64.659l-61.072 13.771c-68.855 14.967-134.71 39.517-173.022 64.061l-25.147 15.565-10.777-13.771c-56.877-74.235 37.119-160.45 216.728-199.967 20.956-4.195 41.91-8.38 46.098-8.38 5.391-0.598 7.184 16.163 7.184 64.061zM775.431 674.985c96.993 27.54 172.424 76.638 183.207 117.945 4.793 20.956-1.196 51.486-14.369 68.257l-10.777 13.771-35.921-20.956c-39.517-23.347-122.135-52.084-183.207-63.463l-40.714-7.184v-130.514l25.747 3.592c13.771 2.392 47.9 10.777 76.040 18.562zM637.732 749.827v25.747h-245.466v-50.888h245.466v25.147z" />
            <path className="path6" d="M919.672 486.253c-2.392 1.794-4.195 9.576-4.195 16.76 0 10.777-2.989 12.575-17.358 10.174-24.543-3.592-29.934 9.576-10.777 25.147 12.575 10.174 14.369 14.967 9.576 23.347-13.771 23.945 10.174 38.913 26.344 16.163l8.38-11.976 10.777 11.976c20.358 22.749 40.714 7.184 23.347-17.358-8.38-11.976-7.782-13.173 5.989-18.562 10.174-3.592 15.565-10.174 15.565-18.562 0-11.38-2.392-12.575-20.956-9.576-19.76 2.989-20.956 2.392-20.956-14.369 0-12.575-2.989-17.358-10.777-17.358-5.989 0-13.173 1.794-14.967 4.195z" />
          </symbol>
          <symbol id="icon-search" viewBox="0 0 1024 1024">
            <title>search</title>
            <path className="path1" d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z" />
          </symbol>
          <symbol id="icon-karaoke" viewBox="0 0 1024 1024">
            <title>karaoke</title>
            <path className="path1" d="M175.312 36.889c-62.865 20.552-111.826 64.074-140.236 123.916-13.298 28.41-15.716 42.313-15.716 88.252 0 47.753 2.418 58.633 17.53 90.066 32.037 65.282 96.11 114.244 159.579 122.102 32.641 4.231 43.522 10.276 426.754 243.6 147.49 89.461 265.966 157.766 273.824 157.766 8.463 0 20.552-3.022 27.201-6.649 10.276-5.44 15.112-3.627 32.641 13.298 38.081 36.872 22.97 90.67-30.828 111.826-22.97 8.463-39.895 9.671-101.55 6.649-100.946-4.836-195.847-29.014-386.254-97.319-149.303-53.193-293.167-70.118-358.449-41.104-16.321 7.858-35.059 18.134-41.708 24.179-13.903 12.694-33.246 53.798-33.85 71.932 0 12.089 3.022 13.903 24.179 13.903 16.925 0 24.179-2.418 24.179-9.067 0-18.738 15.716-40.499 36.268-51.38 68.305-35.059 181.34-16.925 426.149 68.909 150.512 52.589 253.876 72.536 353.009 68.909 50.775-1.813 69.514-5.44 89.461-15.716 50.171-25.992 80.394-84.021 68.305-129.356-6.649-23.574-39.29-71.327-48.357-71.327-4.231 0-5.44-10.88-3.022-29.014l3.022-28.41-262.339-274.428c-192.825-201.288-264.152-279.868-267.174-293.167-12.089-56.82-61.656-117.267-119.080-145.072-41.104-20.552-113.035-26.597-153.535-13.298zM323.406 77.388c116.662 56.82 140.236 218.817 45.335 308.278-35.059 33.85-70.723 48.962-120.289 52.589-82.812 5.44-148.699-32.037-184.967-105.782-16.925-35.059-19.947-46.544-19.343-86.439 0-56.215 19.947-101.55 60.447-139.027 62.26-57.424 140.841-68.305 218.817-29.619zM678.833 489.030c102.155 107.595 206.123 216.399 231.511 242.391l45.94 46.544-12.089 21.761c-6.649 12.089-19.947 25.992-30.828 30.828l-18.738 9.067-281.682-171.064c-155.348-94.297-282.286-173.482-282.286-175.295 0-2.418 8.463-7.254 18.738-12.089 55.007-22.365 110.617-87.648 130.565-152.93 5.44-18.738 10.88-33.85 11.485-33.85s84.625 87.648 187.385 194.638z" />
          </symbol>
          <symbol id="icon-checkbox-unchecked" viewBox="0 0 1024 1024">
            <title>checkbox-unchecked</title>
            <path className="path1" d="M157.6 2c-71.6 12.2-131 66.8-152 139.4l-4.6 15.6v710l4.6 15.6c19.4 67 68.8 116.4 135.8 135.8l15.6 4.6h710l15.6-4.6c67-19.4 116.4-68.8 135.8-135.8l4.6-15.6v-710l-4.6-15.6c-19.2-66.4-67.4-115-134.8-135.8l-14.6-4.6-351-0.2c-193-0.2-355.2 0.4-360.4 1.2zM866.8 85.4c34.4 13 61.4 40.6 72.4 74 3.6 11.2 3.8 22 3.8 352.6s-0.2 341.4-3.8 352.6c-11 33.4-38 61-72.4 74l-11.8 4.4h-342c-331.6 0-342.4-0.2-353.6-3.8-33.4-11-61-38-74-72.4l-4.4-11.8-0.6-336c-0.4-242.6 0-339.4 1.6-348 6.2-32.8 30.2-63.8 61.6-79.4 24-11.8 4.2-11.4 372.4-11l339 0.4 11.8 4.4z" />
          </symbol>
          <symbol id="icon-checkbox-checked" viewBox="0 0 1024 1024">
            <title>checkbox-checked</title>
            <path className="path1" d="M183 1.4c-17.8 2.4-51 15-70.4 26.8-38.8 23.2-72.4 69-85 115.8l-4.6 17v702l4.6 17c10.2 37.8 35.4 77.4 63.8 100.4 22.2 17.8 40.8 27.8 69.8 37l17.8 5.6h712l18-5.6c19.4-6 43-17.6 58.4-28.6 15-10.6 36-32.4 46.8-48.4l9.8-14.8v-827.2l-9.8-14.8c-10.8-16-31.8-37.8-46.8-48.4-15.4-11-39-22.6-58.4-28.6l-18-5.6-351-0.2c-193-0.2-353.6 0.2-357 0.6zM879.6 83c39.8 9.4 73 41.6 83.4 81 4.4 16.6 4.4 679.4 0 696-10.6 39.6-43.8 71.8-84 81-11.2 2.6-56.2 3-350.4 2.6l-337.6-0.6-13-5c-38-14.8-64.8-46-73-85-4.4-21-4.4-661 0-682 9.4-44.6 44.8-80.4 88-89 4.4-0.8 157.8-1.6 341-1.8 287-0.2 334.8 0.2 345.6 2.8z" />
            <path className="path2" d="M777.8 182c-16.6 2.8-14.2-0.4-164 220.4-78.4 115.8-148.4 219-155.4 229.2l-13 18.8-72.2-72.2c-48.6-48.4-74.6-73-79.6-75.2-10.2-4.2-24.6-3.8-34.6 1-4.6 2.2-20.4 16.4-37.4 33.4-30.6 30.8-37.6 41-37.6 54.6 0 16.4 3.4 20.2 117.6 134.6 60.2 60.4 113.8 112.8 119 116.8 13.4 10 28 15 42.6 15 14.8-0.2 25.4-5 37.4-17 7.6-7.6 373.6-545 382-561 5.4-9.8 4.8-26.2-1-36.8-3.6-6.8-10.8-12.8-34.6-29.2-47.2-32.6-52.8-35.2-69.2-32.4z" />
          </symbol>
          <symbol id="icon-radio-checked" viewBox="0 0 1024 1024">
            <title>radio-checked</title>
            <path className="path1" d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384zM320 512c0-106.039 85.961-192 192-192s192 85.961 192 192c0 106.039-85.961 192-192 192s-192-85.961-192-192z" />
          </symbol>
          <symbol id="icon-radio-unchecked" viewBox="0 0 1024 1024">
            <title>radio-unchecked</title>
            <path className="path1" d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 896c-212.078 0-384-171.922-384-384s171.922-384 384-384c212.078 0 384 171.922 384 384s-171.922 384-384 384z" />
          </symbol>
          <symbol id="icon-billiards" viewBox="0 0 1024 1024">
            <title>billiards</title>
            <path className="path1" d="M604.346 7.417c-53.114 13.279-98.985 39.836-141.235 81.482-56.132 56.132-90.535 129.767-89.932 193.142l0.604 27.764 11.468-22.332c16.296-30.178 50.096-62.168 83.896-78.464 23.539-12.071 37.421-13.882 91.139-13.882 60.357 0 65.789 1.207 105.624 20.521 85.103 41.646 135.803 115.282 140.631 202.799 3.018 60.357-12.071 105.021-48.285 142.442l-24.746 25.35-13.279-37.421c-38.025-105.021-133.992-192.538-242.031-220.906-158.135-41.043-334.377 40.439-403.787 187.106-25.953 56.132-35.611 97.778-35.007 159.946 0.604 149.685 95.364 280.659 239.617 328.945 129.164 43.457 261.345 12.071 356.709-83.896 74.239-74.842 108.642-161.153 104.417-264.967-1.811-52.51-1.811-53.114 13.279-56.735 8.45-1.811 34.403-12.675 58.546-23.539 116.489-54.925 186.503-188.917 165.378-316.873-28.971-175.638-202.195-291.524-373.005-250.481zM798.695 62.945c35.611 12.675 72.428 48.285 80.878 78.464 21.728 79.671-87.517 110.453-162.36 45.871-53.114-44.664-56.735-93.553-10.261-121.921 23.539-14.486 53.114-15.089 91.742-2.414zM432.933 431.122c136.406 56.132 142.442 254.706 10.261 319.288-107.435 52.51-229.96-8.45-251.084-125.542-12.071-64.582 18.711-140.028 71.825-175.035 49.493-33.196 116.489-40.439 168.999-18.711z" />
            <path className="path2" d="M306.787 476.389c-62.771 24.746-64.582 94.157-3.018 105.624l21.728 3.621-15.089 16.296c-29.575 30.782-30.782 57.943-4.225 81.482 18.711 16.9 74.842 16.296 107.435-1.811 60.357-34.403 56.735-100.796-6.639-112.867-17.503-3.018-21.728-6.036-18.107-13.882 2.414-5.432 7.243-19.918 10.864-33.196 6.036-21.728 5.432-24.143-10.261-37.421-18.107-15.693-54.321-19.314-82.689-7.846z" />
          </symbol>
          <symbol id="icon-jacuzzi" viewBox="0 0 1024 1024">
            <title>jacuzzi</title>
            <path className="path1" d="M306.051 25.791c-10.967 10.967-9.141 31.683 4.874 49.353 17.669 21.934 15.233 38.386-9.141 67.026-40.217 46.918-42.043 94.443-5.483 138.313 34.731 41.434 78.602 4.266 45.087-38.386-16.45-21.326-15.233-36.56 5.483-60.32 37.168-43.261 45.701-79.819 27.418-116.379-21.326-41.434-49.353-58.494-68.243-39.603z" />
            <path className="path2" d="M193.33 158.626c-20.717 16.45-37.168 60.929-32.902 88.96 1.826 12.185 14.624 35.951 28.635 53.619 27.418 35.951 29.246 48.744 12.185 70.679-20.717 26.2-12.793 54.837 15.233 54.837 28.635 0 62.151-59.103 54.837-96.879-2.435-12.185-14.624-35.951-28.026-53.619-26.2-35.341-29.857-55.446-11.576-71.897 15.842-14.016 15.842-43.261 0.609-51.793-16.45-8.533-21.326-7.92-38.995 6.093z" />
            <path className="path3" d="M562.571 188.451c-25.592 18.277-44.479 54.229-44.479 84.695 0 22.543 23.761 67.634 43.261 82.255 38.386 28.026 92.613 24.374 130.391-8.533 24.983-21.934 35.951-52.401 31.683-88.96-5.483-52.401-46.31-87.129-101.754-87.129-28.635 0-38.995 3.048-59.103 17.669zM642.391 232.32c34.731 15.842 32.293 63.977-3.657 79.21-48.744 20.107-83.477-51.184-36.56-76.162 20.107-11.576 21.326-11.576 40.217-3.048z" />
            <path className="path4" d="M405.371 408.411l-54.837 54.837h-106.629l-111.504 55.446c-60.929 30.466-115.77 59.712-121.254 65.195-9.75 8.533-10.967 24.374-10.967 168.779s1.217 160.248 10.967 169.389c5.483 4.874 60.929 34.119 121.863 64.586l112.113 55.446h528.879l121.254-60.32c66.413-33.51 122.472-65.195 124.906-70.679 1.826-5.483 3.657-77.993 3.657-160.857 0-118.206-1.826-152.938-8.533-162.074-4.874-6.701-32.902-24.374-63.369-38.995-54.229-26.809-54.837-27.418-45.701-40.826 12.185-18.89 7.92-24.374-63.977-95.662-48.136-47.527-63.369-59.712-74.945-57.886-12.185 1.217-21.934 16.45-55.446 81.037-41.434 80.429-48.136 105.411-32.902 118.815 20.717 17.059 35.951 4.874 65.803-51.793 15.842-30.466 29.857-57.886 31.075-60.929 1.826-3.657 14.624 5.483 29.246 19.499l25.592 25.592-22.543 10.359c-40.826 19.499-37.168 59.712 6.093 60.929 14.624 0 40.826 9.141 69.462 23.761l45.701 23.152-84.695 41.434-84.086 42.043-251.035-0.609h-250.427l-82.255-41.434-82.255-42.043 81.037-40.217 80.429-40.217h117.597l46.31-45.087 46.31-45.701 30.466 58.494c32.293 62.76 45.087 76.162 62.151 65.195 26.2-16.45 24.983-23.152-21.326-115.162-55.446-112.113-54.229-111.504-132.222-33.51zM146.413 696.006l76.162 38.386 1.826 113.939c0.609 63.369 0 114.549-1.826 114.549s-38.995-17.669-82.255-39.603l-79.21-39.603v-112.722c0-62.151 2.435-112.722 4.874-112.722s38.995 17.059 80.429 37.777zM962.89 770.95v112.722l-79.21 39.603c-43.261 21.934-80.429 39.603-82.255 39.603s-2.435-51.184-1.826-114.549l1.826-113.939 74.945-38.386c41.434-20.717 77.993-37.777 81.037-37.777s5.483 48.744 5.483 112.722zM742.318 863.563l1.217 117.597h-463.077v-114.549c0-63.369 1.826-116.989 4.266-118.815 2.435-2.435 105.411-3.657 229.709-3.048l226.051 1.826 1.826 116.989z" />
          </symbol>
          <symbol id="icon-ok" viewBox="0 0 1024 1024">
            <title>ok</title>
            <path className="path1" d="M426 758l-224-218c-14-12-14-32 0-44l44-44c14-12 34-12 46 0l156 154 348-340c12-12 32-12 46 0l44 42c14 12 14 32 0 44l-416 408c-12 12-32 12-44-2z" />
          </symbol>
          <symbol id="icon-cancel" viewBox="0 0 1024 1024">
            <title>cancel</title>
            <path className="path1" d="M764 672l-160-158 160-158c12-12 12-32 0-46l-46-44c-12-14-32-14-46 0l-158 158-158-158c-12-14-32-14-46 0l-44 44c-14 14-14 34 0 46l158 158-158 158c-14 14-14 34 0 46l44 46c14 12 34 12 46 0l158-160 158 160c14 12 34 12 46 0l46-46c12-12 12-32 0-46z" />
          </symbol>
          <symbol id="icon-chevron-up" viewBox="0 0 1024 1024">
            <title>chevron-up</title>
            <path className="path1" d="M202 606c-14 12-14 32 0 44l46 44c12 12 32 12 46 0l218-212 218 212c14 14 34 14 46 0l46-42c14-12 14-32 0-44l-288-280c-12-12-34-12-46 0z" />
          </symbol>
          <symbol id="icon-chevron-down" viewBox="0 0 1024 1024">
            <title>chevron-down</title>
            <path className="path1" d="M822 418c14-12 14-32 0-44l-46-44c-12-12-32-12-46 0l-216 212-220-212c-14-12-34-12-46 0l-46 42c-14 12-14 32 0 44l288 280c12 12 34 12 46 0z" />
          </symbol>
          <symbol id="icon-chevron-left" viewBox="0 0 1024 1024">
            <title>chevron-left</title>
            <path className="path1" d="M606 822c12 14 32 14 44 0l44-46c12-12 12-32 0-46l-212-218 212-218c12-14 12-34 0-46l-42-46c-12-14-32-14-44 0l-280 288c-12 12-12 34 0 46z" />
          </symbol>
          <symbol id="icon-chevron-right" viewBox="0 0 1024 1024">
            <title>chevron-right</title>
            <path className="path1" d="M418 202c-12-14-32-14-44 0l-44 46c-12 12-12 32 0 46l212 218-212 218c-12 14-12 34 0 46l42 46c12 14 32 14 44 0l280-288c12-12 12-34 0-46z" />
          </symbol>
          <symbol id="icon-location-point-leaflet" viewBox="0 0 1024 1024">
            <title>location-point-leaflet</title>
            <path className="path1" d="M512 0c-212 0-384 174-384 388 0 276 276 550 360 626 6 6 16 10 24 10s18-4 24-10c84-76 360-350 360-626 0-214-172-388-384-388zM512 860c-134-138-258-318-258-472 0-144 116-260 258-260s258 116 258 260c0 154-124 334-258 472zM384 384c0 70 58 128 128 128s128-58 128-128c0-70-58-128-128-128s-128 58-128 128z" />
          </symbol>
          <symbol id="icon-location-point-mapbox" viewBox="0 0 1024 1024">
            <title>location-point-mapbox</title>
            <path className="path1" d="M512 256c-106 0-192 86-192 192s86 192 192 192c106 0 192-86 192-192s-86-192-192-192zM512 512c-36 0-64-28-64-64s28-64 64-64c36 0 64 28 64 64s-28 64-64 64zM512 0c-246 0-448 202-448 448 0 276 324 500 420 560 16 8 40 8 56 0 96-62 420-286 420-560 0-246-202-448-448-448zM512 896c-124-84-320-270-320-448 0-182 144-320 320-320s320 138 320 320c0 176-200 362-320 448z" />
          </symbol>
          <symbol id="icon-list" viewBox="0 0 1024 1024">
            <title>list</title>
            <path className="path1" d="M512 96v64c0 18 14 32 32 32h448c18 0 32-14 32-32v-64c0-18-14-32-32-32h-448c-18 0-32 14-32 32zM512 288v64c0 18 14 32 32 32h320c18 0 32-14 32-32v-64c0-18-14-32-32-32h-320c-18 0-32 14-32 32zM0 128v256c0 36 28 64 64 64h256c36 0 64-28 64-64v-256c0-36-28-64-64-64h-256c-36 0-64 28-64 64zM256 320h-128v-128h128zM0 640v256c0 36 28 64 64 64h256c36 0 64-28 64-64v-256c0-36-28-64-64-64h-256c-36 0-64 28-64 64zM256 832h-128v-128h128zM544 704h448c18 0 32-14 32-32v-64c0-18-14-32-32-32h-448c-18 0-32 14-32 32v64c0 18 14 32 32 32zM544 896h320c18 0 32-14 32-32v-64c0-18-14-32-32-32h-320c-18 0-32 14-32 32v64c0 18 14 32 32 32z" />
          </symbol>
          <symbol id="icon-calendar" viewBox="0 0 1024 1024">
            <title>calendar</title>
            <path className="path1" d="M640 640h128v128h-128zM320 96v-64c0-18-14-32-32-32h-64c-18 0-32 14-32 32v64c0 18 14 32 32 32h64c18 0 32-14 32-32zM640 448h128v128h-128zM832 96v-64c0-18-14-32-32-32h-64c-18 0-32 14-32 32v64c0 18 14 32 32 32h64c18 0 32-14 32-32zM864 192h-192c-18 0-32-14-32-32v-128c0-18-14-32-32-32h-192c-18 0-32 14-32 32v128c0 18-14 32-32 32h-192c-18 0-32-14-32-32v-128c0-18-14-32-32-32h-32c-36 0-64 28-64 64v896c0 36 28 64 64 64h896c36 0 64-28 64-64v-896c0-36-28-64-64-64h-32c-18 0-32 14-32 32v128c0 18-14 32-32 32zM896 896h-768v-576h768zM256 448h128v128h-128zM448 448h128v128h-128zM256 640h128v128h-128zM448 640h128v128h-128z" />
          </symbol>
          <symbol id="icon-point" viewBox="0 0 1024 1024">
            <title>point</title>
            <path className="path1" d="M512 298c82 0 150-66 150-148s-68-150-150-150c-82 0-150 68-150 150s68 148 150 148zM512 42c58 0 106 48 106 108 0 58-48 106-106 106s-106-48-106-106c0-60 48-108 106-108zM426 620v170c0 12 10 20 22 20h128c12 0 22-8 22-20v-170c94-50 128-180 128-278 0-12-10-22-22-22h-384c-12 0-22 10-22 22 0 98 34 228 128 278zM682 362c-4 76-32 190-114 224-8 4-14 12-14 20v162h-84v-162c0-8-6-16-14-20-82-34-110-148-114-224zM512 874c-172 0-272-34-278-52 2-4 26-26 110-40 12-2 20-14 18-26s-12-18-24-16c-98 16-146 44-146 82 0 76 202 96 320 96s320-20 320-96c0-38-48-66-144-82-12-2-24 4-26 16s6 24 18 26c86 14 108 36 110 38-6 20-106 54-278 54zM686 650c-12 0-22 8-24 20-2 10 6 22 18 24 198 24 302 88 302 138 0 70-194 150-470 150s-470-80-470-150c0-50 104-114 302-138 12-2 20-14 18-24-2-12-12-20-24-20-164 22-338 80-338 182 0 94 180 192 512 192s512-98 512-192c0-102-174-160-338-182z" />
          </symbol>
          <symbol id="icon-mobile" viewBox="0 0 1024 1024">
            <title>mobile</title>
            <path className="path1" d="M746 0h-468c-60 0-108 48-108 106v812c0 58 48 106 108 106h468c60 0 108-48 108-106v-812c0-58-48-106-108-106zM214 214h596v596h-596zM278 42h468c36 0 64 30 64 64v64h-596v-64c0-34 28-64 64-64zM746 982h-468c-36 0-64-30-64-64v-64h596v64c0 34-28 64-64 64zM554 918c0 22-18 42-42 42s-42-20-42-42c0-24 18-44 42-44s42 20 42 44zM406 128h212c12 0 22-10 22-22s-10-20-22-20h-212c-12 0-22 8-22 20s10 22 22 22z" />
          </symbol>
          <symbol id="icon-message" viewBox="0 0 1024 1024">
            <title>message</title>
            <path className="path1" d="M960 86h-896c-36 0-64 28-64 64v554c0 36 28 64 64 64h64v200l200-200h632c36 0 64-28 64-64v-554c0-36-28-64-64-64zM982 704c0 12-10 22-22 22h-648l-142 140v-140h-106c-12 0-22-10-22-22v-554c0-12 10-22 22-22h896c12 0 22 10 22 22zM384 426c0 24-20 44-42 44-24 0-44-20-44-44 0-22 20-42 44-42 22 0 42 20 42 42zM726 426c0 24-20 44-44 44-22 0-42-20-42-44 0-22 20-42 42-42 24 0 44 20 44 42zM554 426c0 24-18 44-42 44s-42-20-42-44c0-22 18-42 42-42s42 20 42 42z" />
          </symbol>
          <symbol id="icon-info" viewBox="0 0 1024 1024">
            <title>info</title>
            <path className="path1" d="M570 662c-24 28-40 38-52 38-8 0-10-6-8-22 4-40 34-168 44-216 8-38 6-58-6-58-22 0-74 34-108 70-2 2-4 16-4 22 0 2 4 2 4 2 20-16 36-26 46-26 4 0 6 8 4 20-12 50-28 130-42 196-12 56-4 80 14 80s68-24 108-78c2-4 4-20 2-24 0-2-2-4-2-4zM562 256c-14 0-32 6-40 16-4 4-8 16-8 24 0 14 4 24 14 28 4 4 32 2 38-2 10-6 20-20 22-36 0-8-2-18-4-24-2-2-10-6-22-6zM512 0c-282 0-512 230-512 512s230 512 512 512c282 0 512-230 512-512s-230-512-512-512zM512 944c-238 0-432-194-432-432s194-432 432-432c238 0 432 194 432 432s-194 432-432 432z" />
          </symbol>
          <symbol id="icon-parking" viewBox="0 0 1024 1024">
            <title>parking</title>
            <path className="path1" d="M218 160c46-28 98-40 150-44 92-8 186-8 278-2 52 4 106 16 154 42 22 12 36 36 44 58 24 66 50 132 74 198 18 0 38-2 58 4 26 16 38 46 42 76-4 30-44 20-64 22 10 32 14 66 14 100-2 90 0 178-2 268 2 16-12 26-22 36h-152c-40-18-24-68-28-102-168 0-336 0-504 0-4 34 10 82-26 102h-150c-14-8-28-20-26-38-2-64 0-126-2-190 2-58-6-120 14-176-20-2-40 2-58-6-14-24 4-54 16-74 16-28 52-22 78-22 22-64 48-128 70-190 8-24 20-48 42-62zM288 204c-16 4-36 12-42 30-28 62-44 128-62 192 70 18 142 28 212 32 148 8 300 4 444-32-22-68-38-140-68-204-74-40-160-32-240-38-82 2-164 0-244 20zM114 650c44 22 94 18 142 18 20-2 50-2 56-26 0-26-28-36-48-46-38-16-78-38-122-40-48 2-38 64-28 94zM778 588c-24 12-64 20-66 54 6 26 36 24 56 26 48 0 98 4 142-18 8-26 14-62-4-86-42-20-88 10-128 24z" />
          </symbol>
          <symbol id="icon-internet" viewBox="0 0 1024 1024">
            <title>internet</title>
            <path className="path1" d="M112 240c152-104 344-144 524-110 136 26 264 90 364 186 30 30 18 90-24 102-30 12-58-6-78-26-96-86-220-138-348-146-146-12-298 36-412 130-22 18-42 42-72 46s-54-20-66-44v-32c24-48 70-76 112-106zM410 336c148-30 310 12 422 112 26 18 52 46 46 78-4 36-46 62-78 48-22-6-40-22-56-36-116-100-298-114-426-32-42 18-68 66-116 72-42 4-76-46-60-84 18-34 52-52 80-76 56-38 120-68 188-82zM454 542c86-18 178 8 246 66 12 12 28 24 34 40 18 36-8 84-48 86-28 6-52-16-72-34-58-52-152-50-212 0-14 12-26 28-46 32-34 12-76-16-78-52-4-22 10-40 22-56 40-42 96-72 154-82zM478 760c52-26 118 26 104 82-8 54-80 80-120 44-44-32-34-106 16-126z" />
          </symbol>
          <symbol id="icon-smoking" viewBox="0 0 1024 1024">
            <title>smoking</title>
            <path className="path1" d="M718 212h36c36 4 72 18 98 44 16 18 26 40 32 64 16 2 32 8 46 16 36 20 64 50 80 86 8 18 12 36 14 56v48c-4 24-8 48-16 70 2-34 0-68-10-102-8-30-20-60-42-84-26-32-66-52-106-60 2-28-12-56-32-74-22-20-48-34-74-42-20-6-40-10-62-8 10-10 24-12 36-14zM532 240c4-10 8-18 14-26-10 32-14 66-8 98 4 34 20 64 44 86 32 28 72 40 112 46 26 4 54 8 80 14 34 8 68 20 92 44s34 58 30 90c-6-28-20-54-44-68-28-16-60-22-90-28-42-8-84-10-124-22-34-10-68-28-92-56-18-18-28-44-30-70-6-36 2-74 16-108zM0 640c256 0 512 0 768 0 0 50 0 100 0 150 0 8 0 14 0 20h-768zM810 640c30 0 58 0 86 0 0 50 0 100 0 150 0 8 0 14 0 20h-84c-2-56-2-114-2-170zM938 640c30 0 58 0 86 0v170h-84c-2-56-2-114-2-170z" />
          </symbol>
          <symbol id="icon-bar" viewBox="0 0 1024 1024">
            <title>bar</title>
            <path className="path1" d="M152 0h720c44 120 46 256-4 372-38 92-104 172-192 218-42 22-84 48-110 90-18 28-14 64-14 96 0 34-4 70 2 104 8 20 26 32 42 44 42 28 88 44 130 70 12 6 16 20 24 30h-474c4-10 6-22 16-28 52-34 116-50 162-94 26-22 18-56 18-86-2-48 12-104-22-146-42-62-120-80-174-130-150-130-196-358-124-540zM210 78c-26 106-10 222 44 314 40 66 100 122 174 144-84-78-136-186-148-300 180 0 362 0 542 0 8-52 4-106-8-158-202 0-402 0-604 0z" />
          </symbol>
          <symbol id="icon-kitchen" viewBox="0 0 1024 1024">
            <title>kitchen</title>
            <path className="path1" d="M190 12c20-2 40-4 60-6 2 76 0 150 2 226 0 14 12 22 24 26 4-2 14-6 18-8 10-24 6-50 6-74 0-58 0-116 0-172 24-2 46-2 68 0 0 56 0 114 0 172 0 26-2 52 6 78 16 8 40 6 42-16 4-78 0-156 2-232 20 2 40 4 60 6 4 90 6 180 10 268 2 34-4 72-26 100-20 26-50 38-74 60-18 14-12 36-10 56 16 134 44 270 28 406-4 32-8 64-24 92-20 32-76 34-94 0-16-30-20-64-24-96-14-132 12-262 26-394 0-20 12-48-8-64-26-22-58-36-78-64s-24-62-24-96c4-90 6-178 10-268zM654 8c48 2 96 14 128 52 44 52 56 122 62 188v84c-2 36-12 72-32 102-22 38-58 68-76 106-20 42 0 84 10 124 26 82 18 170 12 254-4 32-8 68-34 92-26 18-74 12-86-20-22-46-20-98-24-148-6-108 14-214 26-320 16-172 14-344 14-514z" />
          </symbol>
          <symbol id="icon-pool" viewBox="0 0 1024 1024">
            <title>pool</title>
            <path className="path1" d="M398 242c14-6 28-12 42-10 20 4 32 24 44 40 44 70 88 140 132 210 14 24 34 46 34 74-110 10-214 52-322 70-34 6-78 12-106-16 80-48 162-96 242-146-16-34-30-68-46-102-8-16-28-14-42-8-66 24-128 48-194 72-18 8-52 12-58-14 0-22 22-36 38-46 78-42 158-84 236-124zM746 302c54-24 122 4 144 60 26 54-6 128-64 146-58 24-130-14-144-74-16-52 12-112 64-132zM0 620c24 8 44 24 66 36 84 40 178 56 270 52 136-6 264-68 400-74 104-4 202 40 282 102-98-14-196-22-296-18-68 2-130 28-192 48-76 22-156 28-234 28-106-2-214-52-272-142-8-10-14-22-24-30z" />
          </symbol>
          <symbol id="icon-add-user" viewBox="0 0 1024 1024">
            <title>add-user</title>
            <path className="path1" d="M682 668l84 40-16 64-96-46c-20-10-34-28-36-50-4-22 6-44 24-58 68-54 94-172 94-234v-160c0-68-116-160-224-160s-224 94-224 160v160c0 62 30 180 98 234 16 12 26 34 22 56-2 22-16 42-36 52l-282 132c-6 4-26 12-26 36v66h704v64h-704c-36 0-64-28-64-64v-96c0-36 64-64 64-64l282-132c-90-72-122-214-122-284v-160c0-106 146-224 288-224s288 118 288 224v160c0 76-30 214-118 284zM992 896h-96v96c0 18-14 32-32 32s-32-14-32-32v-96h-96c-18 0-32-14-32-32s14-32 32-32h96v-96c0-18 14-32 32-32s32 14 32 32v96h96c18 0 32 14 32 32s-14 32-32 32z" />
          </symbol>
          <symbol id="icon-comments" viewBox="0 0 1024 1024">
            <title>comments</title>
            <path className="path1" d="M120 814c-10 0-18-4-22-14-2-8 0-18 6-24 16-18 46-58 68-104-106-50-172-136-172-228 0-148 170-270 378-270 210 0 378 122 378 270 0 150-168 272-378 272-12 0-24-2-36-2-62 66-136 100-222 100zM1024 516c0-124-128-228-294-248 44 50 72 112 72 176 0 138-118 254-282 298 58 20 122 30 186 26 58 60 126 92 206 92 8 0 18-6 20-14 4-8 2-18-4-24-16-16-42-54-62-94 98-48 158-126 158-212z" />
          </symbol>
          <symbol id="icon-star-full" viewBox="0 0 1024 1024">
            <title>star-full</title>
            <path className="path1" d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z" />
          </symbol>
          <symbol id="icon-star-half" viewBox="0 0 1024 1024">
            <title>star-half</title>
            <path className="path1" d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538zM512 753.498l-0.942 0.496 0.942-570.768 111.736 226.396 249.836 36.304-180.788 176.222 42.678 248.83-223.462-117.48z" />
          </symbol>
          <symbol id="icon-star-empty" viewBox="0 0 1024 1024">
            <title>star-empty</title>
            <path className="path1" d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538zM512 753.498l-223.462 117.48 42.676-248.83-180.786-176.222 249.84-36.304 111.732-226.396 111.736 226.396 249.836 36.304-180.788 176.222 42.678 248.83-223.462-117.48z" />
          </symbol>
        </defs>
      </svg>
        <div id="root" dangerouslySetInnerHTML={{__html: content}}></div>
        <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__=${serialize(store.getState())};`}} charSet="UTF-8"></script>
        <script dangerouslySetInnerHTML={{__html: `window.__REFERENCE_DATETIME__=${serialize(referenceDatetime)};`}} charSet="UTF-8"></script>
        <script src={assets.javascript.main}></script>
      </body>
      </html>
    );
  }
}

React.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object,
  locale: PropTypes.string,
  referenceDatetime: PropTypes.object,
};

export default Root;
