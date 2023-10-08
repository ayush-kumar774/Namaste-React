# 1. What is JSX?

- **JSX** stands for *JavaScript XML*.
- It enables writing HTML in React.
- JSX facilitates writing HTML elements within JavaScript, allowing them to be placed in the DOM without the need for `createElement()` or `appendChild()` methods.
- JSX automatically converts HTML tags into React elements.

## Example 1

### JSX:
```javascript
const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

### Without JSX:
```javascript
const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

```

# 2. Role of type attribute in script tag?

The `type` attribute specifies the type of the script. It identifies the content between the `<script>` and `</script>` tags.

For instance, consider the following example:

```javascript
<script type="application/javascript">
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
```


# 3. {TitleComponent} vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX?
## JSX Rendering of React Components

In JSX (JavaScript XML), there are three different ways to use a React component:

### `{TitleComponent}`

This is the most common way to render a React component in JSX. It's essentially a JavaScript expression inside curly braces (`{}`). When you put a component like this, it's assumed that `TitleComponent` is a valid React component.

### `{<TitleComponent/>}`

This is known as a self-closing tag. It's similar to how you would use a self-closing tag in regular HTML for elements like images or inputs. In JSX, you use it to indicate that you're using a React component and not a regular HTML element. This syntax is especially important when your component doesn't have any child components or content.

### `{<TitleComponent></TitleComponent>}`

This is an opening and closing tag, similar to how you would wrap content in HTML tags. In this case, you're explicitly declaring the opening and closing of the component. This is used when you have child components or content that you want to include within `TitleComponent`.

### Summary:

- Use `{TitleComponent}` when you just want to render the component.
- Use `{<TitleComponent/>}` when the component doesn't have any child components or content.
- Use `{<TitleComponent></TitleComponent>}` when you want to include child components or content within `TitleComponent`.
