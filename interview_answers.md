# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A stateful component manages data and changes to that data.
Functional components are presentational, changing
views depending on the props being consumed.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called before render.
componentWillUpdate is called before render with new props.

3. Define stateful logic.

Stateful logic is logic built into a component.
Its only concern is to manipulate data. Examples of stateful logic are setting/updating state, validating form inputs, or handling a click.

4. What are the three step of creating a successful test? What is done in each phase?

The three phases of creating a successful test
are Arrange, Act, Assert.

In the [arrange] phase, we set up the environment with
required elements such as rendering the main component.

In the [act] phase, we simulate the user experience by clicking buttons and typing in forms.

In the [assert] phase, we confirm that expected results are the outcome.
