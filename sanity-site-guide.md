# Ben Murr Website Guide

Beginner guide for updating the website through Sanity, checking changes locally and pushing code changes when needed.

Updated: 3 May 2026

## 1. What edits happen in Sanity and what edits happen in code

Think of the site in two parts:

- Sanity: content editing
- Code: layout, styling, navigation and fixed page copy

### Edited in Sanity now

- Blog articles
- About sections
- Cover images
- Inline images inside blog and About body copy
- About section order
- Tags and categories used by content

### Still edited in code

- Homepage hero headline and buttons
- Blog landing-page hero headline and intro copy
- About landing-page hero headline and intro copy
- Navigation
- Footer
- Spacing, layout and styling

## 2. Current site structure

### Main routes

- `/` Homepage
- `/blog` Blog landing page
- `/blog/[slug]` Individual blog article pages
- `/about` About landing page
- `/about/[slug]` Individual About section pages

### How the pages work

#### Homepage

- Pulls the featured blog article automatically
- Shows fixed homepage copy from code
- About card on the homepage links into the About area

#### Blog landing page

- Hero copy is currently code-driven
- Featured article is pulled from Sanity
- Archive list is pulled from Sanity

#### Blog article pages

- Main content comes from Sanity
- Cover image comes from Sanity
- Inline images come from Sanity

#### About landing page

- Hero copy is currently code-driven
- About section cards are pulled from Sanity
- The first card shown is controlled by the About section `Order` field

#### About section pages

- Main content comes from Sanity
- Cover image comes from Sanity
- Inline images come from Sanity
- Support panel content comes from Sanity

## 3. What you need open when working

### To edit content in Sanity

Run:

```bash
cd "/Users/benmurr/Documents/New project"
npx sanity@latest dev --port 3333
```

Then open:

- `http://localhost:3333/structure`

### To preview the website locally

Run:

```bash
cd "/Users/benmurr/Documents/New project"
npm run dev
```

Then open:

- `http://localhost:3000`

### If the port is already in use

You may see a message saying another server is already running.

If that happens:

- use the existing localhost URL if it is already correct
- or stop the old process and restart

Example:

```bash
kill 48161
npm run dev
```

## 4. Everyday workflow

### If you are only changing content in Sanity

1. Start Sanity Studio
2. Edit the content
3. Publish the content
4. Refresh the local site
5. Check the live site after a short wait

You do not need a code push for normal content changes if the layout already supports that content type.

### If you are changing layout, styling or fixed copy

1. Edit the code
2. Preview locally
3. Commit the code
4. Push to GitHub
5. Wait for Vercel to redeploy

## 5. Blog articles in Sanity

Open:

- `Article`

### Main blog fields

- `Title`
- `Slug`
- `Publish date`
- `Summary`
- `Cover image`
- `Category`
- `Tags`
- `Featured article`
- `Body`
- `SEO title`
- `SEO description`

### What each field does

#### Title

The page headline shown on the blog article page and in the blog list.

#### Slug

The page URL.

Example:

- `crafting-a-personal-website-from-scratch-with-ai-part-1`

#### Publish date

Used for date display and ordering on the blog.

#### Summary

Used in cards, featured article panels and previews.

#### Cover image

Used in the featured card, blog cards and the article hero.

#### Category

Used for article theme and grouping.

#### Tags

Used for supporting labels.

#### Featured article

If checked, this article becomes the featured one used on:

- homepage latest article areas
- blog landing featured area

If no article is featured, the newest article is usually used instead.

#### Body

Main article content. This supports:

- text
- inline images
- image alt text
- image captions

## 6. How to create a new blog article

1. Open `Article`
2. Click `Create new`
3. Fill in:
   - title
   - slug
   - publish date
   - summary
   - category
   - tags
   - cover image
4. Write the body
5. Add inline images if needed
6. Decide whether it should be featured
7. Publish

### Good beginner tip

If you are not ready to make it live yet, leave it unpublished and keep working in draft mode.

## 7. About sections in Sanity

Open:

- `About section`

### Main About fields

- `Title`
- `Navigation label`
- `Slug`
- `Order`
- `Summary`
- `Focus areas`
- `Ways of working`
- `Current interests`
- `Cover image`
- `Tags`
- `Body`
- `SEO title`
- `SEO description`

### What each field does

#### Title

Main section title.

#### Navigation label

Optional shorter label if you want a shorter display name.

#### Slug

The URL for that About section.

Example:

- `about-me`
- `how-i-work`

#### Order

Controls landing-page order.

The section with the lowest order number appears first and becomes the lead card on the About landing page.

#### Summary

Short description shown on the About landing page card and section page.

#### Focus areas

Shown in the section side panel and notes panel.

#### Ways of working

Shown in the section side panel and notes panel.

#### Current interests

Shown in the section side panel and notes panel.

#### Cover image

Used in the About landing-page card and the section page.

#### Tags

Shown on the landing card and the section page.

#### Body

Main long-form copy. This supports:

- text
- inline images
- image alt text
- image captions

## 8. How to create a new About section

1. Open `About section`
2. Click `Create new`
3. Fill in:
   - title
   - navigation label if needed
   - slug
   - order
   - summary
   - cover image
   - tags
4. Add:
   - focus areas
   - ways of working
   - current interests
5. Add the body content
6. Add inline images if needed
7. Publish

### Example ordering

- `About me` = Order `1`
- `How I work` = Order `2`
- `Leadership approach` = Order `3`

That would place:

1. `About me` first
2. `How I work` second
3. `Leadership approach` third

## 9. Images in Sanity

### Cover image

Use the `Cover image` field for the main visual for the article or About section.

### Inline image

Use the `Body` field insert menu to add images inside the content itself.

When adding an image:

- always add `Alt text`
- add a caption if it helps the reader

## 10. Blog and About ordering rules

### Blog

- ordered by `Publish date`
- newest first
- featured article can be used in highlighted positions

### About

- ordered by `Order`
- then by title if two sections share the same order

## 11. What changes appear automatically and what need a code push

### Changes that appear automatically after publishing in Sanity

- new blog articles
- edits to blog article copy
- new About sections
- edits to About section copy
- image changes inside those supported content types
- reordering About sections through `Order`

### Changes that still need code edits and a push

- layout changes
- spacing changes
- navigation changes
- footer changes
- homepage hero copy
- blog landing hero copy
- About landing hero copy
- new page types

## 12. How to push code to production

Run:

```bash
cd "/Users/benmurr/Documents/New project"
git status
git add .
git commit -m "Describe the change"
git push
```

Then:

1. Wait a minute or two
2. Let Vercel redeploy
3. Refresh the live site

## 13. Beginner troubleshooting

### Problem: localhost is not loading

Make sure the local server is running.

For the website:

```bash
npm run dev
```

For Sanity:

```bash
npx sanity@latest dev --port 3333
```

### Problem: the wrong localhost port appears

Sometimes `3000` is already in use and Next starts on `3001`.

Either:

- use the new port shown in Terminal
- or stop the old process and restart

### Problem: content is published in Sanity but not visible on the site

Check:

1. the entry is actually published
2. the slug is correct
3. the content type is supported by the page
4. the page has been refreshed
5. you allow a short delay for revalidation

### Problem: new About section is in the wrong place

Check the `Order` field in Sanity.

### Problem: I changed something but the live site did not update

Ask:

- was this a content change in Sanity
- or a code/layout change

If it was a code/layout change, it needs a Git push.

## 14. Recommended working pattern

### For writing days

- open Sanity
- draft the article or About section
- publish
- preview locally
- check live

### For layout days

- run the local website
- test the page in localhost
- commit and push code when happy

## 15. Suggested future improvements

Good future candidates to move into Sanity:

- homepage hero copy
- blog landing hero copy
- About landing hero copy
- footer text
- navigation supporting copy

That would reduce the amount of code editing needed for day-to-day updates.

