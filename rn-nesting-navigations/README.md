### Nesting Navigators

Basic Structure That we are going to Create.

```
        [LOGIN AND CREATE ACCOUNT STACK]
                    |
                    |
        [       BOTTOM TABS       ]----> [ STACK NAVIGATOR FOR EACH]
                                                        |
                                                        |
                                                [ NAVIGATION DRAWER (Home Route)]

```

- We are going to start by creating a Authentication stack.
  - This stack contains two screens
  - Login Screen
  - Register Screen
- When the user authenticate we are going to be navigated to the Application
- In the application we have a Bottom Tab Navigator and each bottom tab has it's stack navigator
- The Feed Stack will have a navigation drawer, which is the initial stack of the Home Tab

### Amazing React Native Navigation Docs

- [bottom tab](https://reactnavigation.org/docs/bottom-tab-navigator)
- [stack](https://reactnavigation.org/docs/stack-navigator)
- [drawer](https://reactnavigation.org/docs/drawer-navigator)
