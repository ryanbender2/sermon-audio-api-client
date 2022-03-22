<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ryanbender2/sermon-audio-api-client">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Sermon Audio API Client</h3>

  <p align="center">
    A Typescript client for the Sermon Audio API.
    <br />
    <a href="https://github.com/ryanbender2/sermon-audio-api-client"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ryanbender2/sermon-audio-api-client">View Demo</a>
    ·
    <a href="https://github.com/ryanbender2/sermon-audio-api-client/issues">Report Bug</a>
    ·
    <a href="https://github.com/ryanbender2/sermon-audio-api-client/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This library is meant to closely resemble the [python library](https://pypi.org/project/sermonaudio/) authored
and maintained by Sermon Audio. As of now, the brocaster functionality requiring a API token has been left out.
This library currently only interfaces with the public API. Documentation on the Sermon Audio API can be
found at the [API](https://api.sermonaudio.com/#home) site.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [node-fetch](https://www.npmjs.com/package/node-fetch)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### ES Modules (ESM)

```js
import { getSermon } from 'sermon-audio/node';

const sermon = getSermon(...);
```

It's recommended that you not import the entire module to
reduce the amount of unused import. Alternatively though, you can import
the entire module:

```js
import sermonaudio from 'sermon-audio/node';

const sermon = sermonaudio.getSermon(...);
```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ryan Bender - [@itsmeryan.hihello](https://www.instagram.com/itsmeryan.hihello/) - ryan.bender.general@gmail.com

Project Link: [https://github.com/ryanbender2/sermon-audio-api-client](https://github.com/ryanbender2/sermon-audio-api-client)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Sermon Audio](https://www.sermonaudio.com/main.asp)
* [SermonAudio APIs Documentation](https://api.sermonaudio.com/#home)
* [SermonAudio.com API Client Library](https://pypi.org/project/sermonaudio/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ryanbender2/sermon-audio-api-client.svg?style=for-the-badge
[contributors-url]: https://github.com/ryanbender2/sermon-audio-api-client/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ryanbender2/sermon-audio-api-client.svg?style=for-the-badge
[forks-url]: https://github.com/ryanbender2/sermon-audio-api-client/network/members
[stars-shield]: https://img.shields.io/github/stars/ryanbender2/sermon-audio-api-client.svg?style=for-the-badge
[stars-url]: https://github.com/ryanbender2/sermon-audio-api-client/stargazers
[issues-shield]: https://img.shields.io/github/issues/ryanbender2/sermon-audio-api-client.svg?style=for-the-badge
[issues-url]: https://github.com/ryanbender2/sermon-audio-api-client/issues
[license-shield]: https://img.shields.io/github/license/ryanbender2/sermon-audio-api-client.svg?style=for-the-badge
[license-url]: https://github.com/ryanbender2/sermon-audio-api-client/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ryan-bender-20a5a8154