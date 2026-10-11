Bazar-dor

Description
Bazar-dor is a Bengali market price tracking app where a user can see today's price of daily products like rice, oil, vegetables, fish and meat from a real API. User can browse by category, check which products went up or down in price today, and view full price details of a product from different markets after logging in.

Technology Used
Next.js Tailwind CSS DaisyUI Better Auth MongoDB React Hot Toast

Features
1.Home page: Shows a price ticker marquee with today's product prices, a section for products that went up in price, a section for products that went down in price, and a full grid of all products.

2.Category page: User can open any category from the navbar and see all products of that category, with a sort dropdown to sort by low to high or high to low price. Shows a proper message if the category does not exist.

3.Product details page: Shows minimum, maximum and average price of a product along with a table of prices from each market. This page is protected, so user has to log in first to see it.

4.Authentication: User can sign up and sign in with email and password or with Google and GitHub, using Better Auth. After sign up user is logged in automatically, no need to sign in again.

5.Profile page: Logged in user can see their account info and update their name from the profile page. User can also sign out from here.

6.Toast notifications and responsive design: Every important action like sign up, sign in, sign out and name update shows a toast message. The whole app works properly on mobile, tablet and desktop screen sizes.
