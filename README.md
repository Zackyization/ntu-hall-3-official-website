[![Netlify Status](https://api.netlify.com/api/v1/badges/9fd1343e-fb58-4850-b494-6ae5f50e944d/deploy-status)](https://app.netlify.com/sites/hall3/deploys)
<div align="center">
  <a href="https://hall3.netlify.app">
    <img width="20%" src="https://hall3.netlify.app/images/h3_remastered_dp.png" alt="Hall 3 Logo">
  </a>
</div>


[![hugo](https://user-images.githubusercontent.com/43764894/223559747-e9d7f19d-91bf-46a9-a0cb-8d6a40d3cfa3.png)](https://ntl.fyi/3P9w1mr)

# NTU Hall 3 Official Website
This is the repository containing the source code for the official NTU Hall 3 website which can be found [here.](https://hall3.netlify.app) This project is powered by Hugo and Netlify. This project also marks the last thing official project Zee Jay has done for Hall 3. Thanks for the 2 years of fond memories.


## Table of Contents:
- [Regular Setup](#regular-setup)
  - [Cloning + Install Packages](#1-cloning--install-packages)
  - [Deploying](#2-deploying)

## Regular Setup

 ### 1. Cloning + Running Locally

  - Clone this repo with one of these options:

    - Click the 'Use this template' button at the top of the page
    - Or via the command line `git clone https://github.com/netlify-templates/hugo-quickstart`

 - Start the Hugo server & check it out:

   - `hugo server -D`
   - go to [http://localhost:1313/](http://localhost:1313/)

  > Alternatively, you can run this locally with [the Netlify CLI](https://docs.netlify.com/cli/get-started/)'s by running the `netlify dev` command for more options like receiving a live preview to share (`netlify dev --live`) and the ability to test [Netlify Functions](https://www.netlify.com/products/functions) and [redirects](https://docs.netlify.com/routing/redirects/). 

  ### 2. Deploying
  - Install the Netlify CLI globally `npm install netlify-cli -g`
    
  - Run `hugo`

  - Then use the `netlify deploy` for a deploy preview link or `netlify deploy --prod` to deploy to production

  Here are a few other ways you can deploy this template:
    
  - Use the Netlify CLI's create from template command `netlify sites:create-template hugo-quickstart` which will create a repo, Netlify project, and deploy it
    
  - If you want to utilize continuous deployment through GitHub webhooks, run the Netlify command `netlify init` to create a new project based on your repo or `netlify link` to connect your repo to an existing project

---
