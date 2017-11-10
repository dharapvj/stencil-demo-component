import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @Prop() first: string;
  @Prop() last: string;

  @Listen('onToggle') // Listen to the onToggle event from the dropdown component
  log(event: CustomEvent) {
    console.log(event.detail);
  }

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
        <button-dropdown title="stencil">
          The content in the slot!
        </button-dropdown>
      </div>
      
    );
  }

}
