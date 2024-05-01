# bluebell
Official repository for bluebell wealth management

---

### SCSS Notes
Styles for this app are implemented using SCSS modules suffixed with .module.scss.
Theming is handled via 3 files:
- colors.module.scss
- typography.module.scss
- variables.module.scss

In addition, due to some programming limitations, any theme changes must be
manually added to the following files:
- bluebell-datepicker.css
- constants.CssConstants.ts

---

### To Do
- Contact us & Report Issue Pages
- 400 & 500 error pages
- SCSS refactor (variable reference cleanup, restructure nesting)
- Mobile re-haul when time allows (will start tracking tasks in git)
- Refactor styles imports to be like AccountBalance.tsx
- News component on dashboard should have scrolling after certain height
- Upon clicking outside a menu, should auto-close
