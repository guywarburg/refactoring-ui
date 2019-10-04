# My Plan

As this is my first design system I'm implementing I decided to start from simply building a functioning mock.
I decided to do it naively and refactor as I go.

Something I learned along the way:
I was quite quickly "fed-up" with configuration and moved to programming. This is fine but there are a few things I would advise to get going from the beginning. Most importantly is the font family. I started with the default fonts, and once I added the font from the design I had to re-visit all component and fix line-heights and margins to have things look nicely.

Final Goal:
Have a working webpage which is 90% pixel-perfect.
Have a StoryBook example of the working prats.
- Typography
- Color pallette
- Common ui elements (buttons, inputs, etc.)
Decide - either utility classes / components or a color creator

color creator -> insert base color and it will give you 9 shades you can copy/paste

### 27th of april
I finally finished my first draft. as it is a first draft it's still horrible. it resembles what I want to have but design still isn't 100% there. However, I wanted to have something instead of nothing.

Now that I "suffered" a bit with this I have a better idea of what I what to have. I'm going to start take apart the design from an atomic point of view and see if that models nicely into styled components. I might have to revert to utility classes but let's see how it goes.

For this stage, I'll try to refactor elements into smaller building blocks. I'll try to improve the types used and add some reusability. I'll build components such as Typography, Inputs, Buttons, Link and maybe try some layouts. My biggest "fear" going into this is how I'll handle layout. We'll see.

### 2nd May
I Added `StyledH2` and `StyledH3` and started to play with shared typography. So far seems nice. After each run like this I will need to check the spacing in the layout.
*Stopped at h3, need to finish typography before I continue.

### 8th May
I Started by going in the Typography route but felt a bit like a dead end. So I moved to a top bottom approach and decided to refactor the whole app trying to think of data flow and the best way to split the components.
I think that the next step is to actually build the data flow and expand the functionality of the components and see what else I can split out.
After that maybe add a StoryBook? We'll see.

### 10th May
Tiny refactor to complete previous step and start with data flow. I think I'll try to use only hooks (next project I'll try mobx).
Started and worked a bit (maybe add more later)

### 12th May
I'll continue with adding data layers in the following fashion:
- I'll add a form context and use the useContext hook and see how it goes.
- I'll add an effect to the input fields to display different states
- Possibly add a toaster mechanism
- create storybook
- publish to github

### May 16th
Started playing around with state.
Currently tried to split state into smaller components but not sure it's worth it. Got quite a bit of duplication and still thinking what is the best way to handle the data flow.
Although I planned to use useContext I eventually used useState. Might be able to reduce the amount on duplication if I useContext

### May ??
Implemented a fully functional app using useState. it's isn't the best option but it works.
I feel like this is taking too long and I need to move forward so this should be good enough.
I'll try to add more states to the input component and validators.

### June 3rd
(I started a few days ago, don't remember exactly when) I implemented a router with mobx and created a home page.
I was very curious to try Michel Werstrate's concept of separating state from ui and wanted to try an implementation of my own. It is still very basic but I hope to grow it.
Maybe I'll try to fake loading states in the next ui and see how that works.
I still need to put my ass down and finish the storybook for the first project.

p.s. (note-to-self) I still need to re-structure the files, add types back and probably do some cleanup

### June 9th
Yay!! I finally finished the WPPusher. That means I restructured the folders, added easier imports and most importantly I added storybook for all reusable components. I also added my own title and emoji favicon :)
I also started to read about options to deploy the site alongside the storybook (have some ideas) but I think that first I'll complete all 3 sites and deploy it all as a finished piece.

p.s. (note-to-self) I should think about fixing up the readme file soon

### June 11th
Started to work on resolute. Added the routing and thought to work systematically, starting with the theme and moving up. This is a bit annoying so I think I'll start with the layout and incrementally add colors.
I almost managed to finish the header . Tried to stay clean and tidy but vscode / my comp is starting to freak out so I'll stop.

### October 4th
After a long stop I decided to get back to coding this project!
At first i thought to try and implement my routing and architecture plan but I think i have enough experiments going on.
I finally decided to simply finish the header and sidebar as planned. 

Next:
- clean up both component and make better separation - ui / domain.
- move all stubs to store and have a dedicated resolute store.
- separate app / layout from the properties domain and start implementing it (with it's dedicated store).
- flow idea: get necessary assets from design, make stubs and store that serves it, storybook from page down to atoms.

### October 4th - later
Started working on a store that will load the data asynchronously. Started filling out all the necessary function for the infrastructure. Got a bit tired as it's a lot of manual work. I'll continue later.
Still have leftovers ^