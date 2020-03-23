- [x] Why would you use class component over function components (removing hooks from the question)?
    For easily reusing the same component in a recyclable fashion.

- [x] Name three lifecycle methods and their purposes.
    render is the most used lcm that runs the exection phase of the react workflow
    componentDidMount is an at first render triggered lcm that runs at mount time
    componentDidUpdate is an on change of state render lcm that runs each time the dom is rerendered

- [x] What is the purpose of a custom hook?
    To extend the usefulness of useState and other hooks, to add non-visual logic to otherwise generic state manipulations

- [x] Why is it important to test our apps?
    To communicate how it works to later devs, to make sure it meets required working status. It gives a clear roadmap of how an app should typically behave and what output one can expect.