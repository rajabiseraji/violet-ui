The components that we've implemented here are the ones that needed to customized in order to prevent further coding and customization.
**Note**: If there's a component that you feel is really abscent from this list and must be added, please make an issue with the name of the component.
## List of Componenets
- [Button](#button)
- [Input](#input)
- [Button Input Group](#button-input-group)
- Checkbox
- Checkbox Group
- Progress Bar
- Radio and Radio Groups
- Searchable Select

## Usage
In this section we describe how to use each of these components in your react application.
Before using each component, be sure to import like this:
```javascript
import MyComponent from 'violet-ui'
```

### Button
This is a simple button component and is built as instructed in the cheatsheet. 
It accepets any prop that a simple button gets, including:

```javascript
props: {
  active: {
      type: bool,
      default: true
  },
  block: {
      type: bool,
      default: false
  },
  color: {
      type: string,
      default: 'primary'
  },
  disabled: {
      type: bool,
      default: false
  },
  outline: {
      type: bool,
      default: false
  },
  onClick: {
      type: func,
  },
  size: { // xs - sm - md - lg
      type: string,
      defualt: "md"
  },
  className: {
      type: string
  },
}
```
There are 4 different flavours of this button, here's how to use them in action: 
```html
<div className="row">
            <div className="col mt-1">
              <Button className="w-100" color="primary">
                کلیک کنید
              </Button>
            </div>
            <div className="col mt-1">
              <Button className="w-100" color="primary" outline>
                کلیک کنید
              </Button>
            </div>
            <div className="col mt-1">
              <Button className="w-100" onClick={this.testMe} color="secondary">
                کلیک کنید
              </Button>
            </div>
            <div className="col mt-1">
              <Button
                className="w-100"
                onClick={this.testMe}
                disabled
                color="secondary"
                outline
              >
                کلیک کنید
              </Button>
            </div>
          </div>
```

### Input
The input component can do many things,but first of all, it can be treated a simple HTML ``<input/>`` tag; meaning you can do something like this: 
```html
<label>Insert your number</label>
<Input id="test" type="text" />
```
and it'll behave as s simple input. It has some interesting abilities too!
#### Bootstrap Sizing
you can specify one of the sizes ``sm, md, lg`` and pass it to ``bsSize`` prop, determining the size of your component in bootstrap standards. 
```html
<label>Insert your number</label>
<Input id="test" type="text" bsSize="lg" />
```
The main advantage of this approach is that later, you can simply customize bootstrap sizes in ``_variables.scss`` and apply your changes everywhere.
#### Validation
This component accepts a ``valid`` prop. This prop is simply a boolean and if set, changes the style of the component accordingly. 
**Note**: This component doesn't and shouldn't implement any inner validation of its own, so you need to couple this valid prop with a JS function; something like this: 
```javascript
    validator = input => {
        if (input.indexOf('hi') !== -1) return true;
        else if (input.indexOf('bye') !== -1) return null;
        else return false;
    };

    ...
     
    <Input
                id="testMe"
                className="w-100"
                onChange={e => this.setState({ input1_text: e.target.value })}
                valid={this.validator(this.state.input1_text)}
                placeholder="رمز عبور"
                type="password"
    />
```


### Button Input Group
sfsdfsdf
