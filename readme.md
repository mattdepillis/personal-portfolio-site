<div align="center">
  <img src="public/cartoon-me-192.png" alt="mattdepillis.com logo">
</div>

# mattdepillis.com - my personal website

## About

My first production-quality project, this website has been years in the making. The about page of this site, linked below, discusses the inspiration behind the creation of this site and the journey I’ve undertaken to create something I’m thematically proud of.

[About](https://www.mattdepillis.com/about)

## Design + Engineering Decisions

### Notion as a CMS

The most impactful design decision that made this site what it is today **was the choice to use [Notion](https://www.notion.so/product) as its content management system** (CMS). I’m a longtime Notion user and evangelist — I started using the product back in 2019 as a college senior — and I’ve been particularly enamored by the product’s sleek design and [flexible block object model](https://www.notion.so/blog/data-model-behind-notion).

When I started building this site, I immediately saw the value in using a CMS, so I wouldn’t have to ship a new version of the website every time I made a change to its content. Notion seemed like an obvious fit for that role. Its flexible content formatting, comprehensive APIs, and integration with my notes and productivity tools would make the design and content creation stages of building a personal website easier.

### Content Rendering

Once I decided on Notion as a CMS, the next step was to figure out how to display content from my Notion workspace on the web. Selecting a UI framework/library wasn’t the challenge — I was dead set on using [React](https://react.dev/) for that purpose. The more daunting task at hand was to figure out how to render content from Notion within my React application. My first instinct was to build a custom rendering component to standardize the retrieval and display of page content by block type; however, this could take a considerable effort to build from scratch, particularly if I wanted to partially replicate Notion’s block styling.

Luckily, after doing some research **I stumbled upon [React-Notion-X](https://github.com/NotionX/react-notion-x), an open source, React-TypeScript Notion renderer** and API wrapper. Not only did it support a wide variety of block types — such as Notion databases, subpages, and linked pages — it also came with a [Next.js website starter kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit) built on top of the renderer, with styling similar to Notion’s. This was the way to go. Using a starter kit with a comprehensive Notion renderer under the hood, I could focus on designing page layouts, creating content, and customizing the UI feature set, without the need to build everything from the ground up.

### Dock Menu

Of all the changes I made to the site’s feature set, **the most notable is the site’s default navigation tool: the dock menu.** I put significant thought into navigation because poorly located or designed menus can dampen the user experience on a site. The less intuitive a website’s navigation is, the more we try to limit our engagement with it as users. I wanted to ensure that wouldn’t be the case with my personal site.

The dock menu was simultaneously a typical and unique solution for website navigation. It was important to me that whatever method I chose would fit into existing mental models we have for navigation as software users. **Dock menus fit the bill, because we see them every day — just in operating systems, not so much in web or mobile applications.** Since users interact with dock menus all the time, they’ll instinctively know it’s a navigation device when they access the site.

In addition to the novelty of dock navigation within a website, the dock itself is sleek and minimalist. It’s designed to blend into page content when reading or clicking around. It’s scrollable when on mobile and it overflows the page right. Icons only colorize when you hover over them (with a cursor) or press and hold (with a fingertip). And you’re able to access any parent page, change dark/light mode, or visit a personal link all from the same source.

Depending on observed user interactions on the site, I may build in a way to hide the dock, particularly for mobile users. For now, it does the job. 〽️
