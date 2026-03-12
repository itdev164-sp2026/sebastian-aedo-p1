Project Description

AEDO'S KITCHEN is a simple recipe blog that allows users to browse recipes and view detailed cooking instructions. The application connects to Contentful, which stores the recipe content. The website retrieves the data and displays it dynamically.

Users can explore different recipes, view ingredients, cooking instructions, and images for each dish.

The application includes the following features:

  -View a homepage introducing the recipe blog
  -Browse a list of all available recipes
  -Click on a recipe to view detailed information
  -Display recipe title, image, description, ingredients, and instructions
  -Use Contentful as a CMS to manage recipe content
  -Dynamic routing for individual recipes using slugs

Tasks and user stories: 

Feature: Browse Recipes
  
  -User Story: As a user, I want to see a list of recipes so that I can choose one to cook.
  -Tasks:
          Create a page to display all recipes
          Fetch recipe data from Contentful
          Display each recipe as a card

Feature: View Recipe Details

  -User Story: As a user, I want to view the details of a recipe so that I can see the ingredients and instructions.
  -Tasks:
          Create a dynamic route for recipes using a slug
          Fetch a single recipe from Contentful
          Display recipe title, description, ingredients, and instructions

Feature: Homepage

  -User Story: As a user, I want a homepage that explains the purpose of the website.
  -Tasks:
          Create a homepage layout
          Add introduction text
          Add navigation to the recipes page 

Run the app locally: 

1) Clone repository: 
                git clone https://github.com/YOUR_USERNAME/sebastian-aedo-p1.git
                cd sebastian-aedo-p1
2) Install dependencies: 
                pnpm install
3) Create environment variables: 
                CONTENTFUL_SPACE_ID=your_space_id
                CONTENTFUL_ACCESS_TOKEN=your_access_token
4) Start server:
                 pnpm dev
