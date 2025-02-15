# My Personal Website
![Light Mode Application Screenshot](https://github.com/gabisantoss/gabrielacruz/blob/main/lightapp.jpg?raw=true)
![Dark Mode Application Screenshot](https://github.com/gabisantoss/gabrielacruz/blob/main/darkapp.jpg?raw=true)

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
   <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
   <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

## Running the project
```bash
docker build -f Dockerfile.development --tag portfolioapp . 
```
```bash
docker run -p 3000:3000 -v $(pwd):/app --rm portfolioapp
```

## License
[MIT](https://choosealicense.com/licenses/mit/).

## Inspiration
* [Portfolio Starter Kit](https://vercel.com/templates/next.js/portfolio-starter-kit), by [Vercel](https://vercel.com/)
* [Portfolio Template](https://magicui.design/docs/templates/portfolio), by [MagicUI](https://magicui.design/)
