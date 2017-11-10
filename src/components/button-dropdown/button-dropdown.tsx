import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';

export interface EventOut{
  visible: boolean;
}

@Component({
  tag: 'button-dropdown',
  styleUrl: 'button-dropdown.scss'
})
export class Dropdown {
  @Prop() title: string = '';
  // Data/state that can change in the component should use the state decorator
  @State() toggle: boolean = false;
  // our custom event for other components to listen to
  @Event() onToggle: EventEmitter<EventOut>;

  render() {
    return (
      <div>
        <button onClick={() => this.toggleClick()}>
          {this.title} {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
        </button>

        <div style={{ display: this.toggle ? 'block' : 'none' }}>
          <slot></slot>
        </div>
      </div>
    )
  }

  // When clicked invert the state of the toggle property
  toggleClick() {
    this.toggle = !this.toggle;
    // When the user click emit the toggle state value
    // A event can emit any type of value
    this.onToggle.emit({ visible: this.toggle });
  }
}
