import * as React from 'react'
import { Octicon, OcticonSymbol } from '../octicons'

interface IToolbarButtonProps {
  readonly title: string,
  readonly description?: string,
  readonly icon?: OcticonSymbol,
}

/**
 * A general purpose toolbar button
 */
export class ToolbarButton extends React.Component<IToolbarButtonProps, void> {

  private renderDropDownArrow() {
    if (!this.props.dropDownState) {
      return null
    }

  }

  public render() {
    const icon = this.props.icon
      ? <Octicon symbol={this.props.icon} className='icon' />
      : null

    const description = this.props.description
      ? <div className='description'>{this.props.description}</div>
      : null

    return (
      <button className='toolbar-button'>
        {icon}
        <div className='text'>
          <div className='title'>{this.props.title}</div>
          {description}
        </div>
        {this.props.children}
      </button>
    )
  }
}
