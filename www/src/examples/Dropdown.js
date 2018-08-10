const dropdownStyle = {
  position: 'relative',
  display: 'inline-block'
};
const menuStyle = {
  minWidth: 150,
  position: 'absolute',
  flexDirection: 'column',
  border: '1px solid #e5e5e5',
  backgroundColor: 'white',
  boxShadow: '0 5px 15px rgba(0,0,0,.5)',
  padding: 20
};

const Menu = () => (
  <Dropdown.Menu flip>
    {({ show, onClose, props }) => (
      <div
        {...props}
        style={{
          ...menuStyle,
          ...props.style,
          display: show ? 'flex' : 'none'
        }}
      >
        <button onClick={onClose} style={{ textAlign: 'left' }}>
          Item 1
        </button>
        <button onClick={onClose} style={{ textAlign: 'left' }}>
          Item 2
        </button>
      </div>
    )}
  </Dropdown.Menu>
);

const Toggle = ({ id }) => (
  <Dropdown.Toggle>
    {({ onToggle, show, props }) => (
      <Button id={id} {...props} onClick={onToggle} />
    )}
  </Dropdown.Toggle>
);

const DropdownButton = ({ show, onToggle, drop, alignEnd, title, role }) => (
  <Dropdown
    show={show}
    onToggle={onToggle}
    drop={drop}
    alignEnd={alignEnd}
    itemSelector="button:not(:disabled)"
  >
    {({ props }) => (
      <div {...props} style={dropdownStyle}>
        <Toggle id="example-toggle">{title}</Toggle>
        <Menu role={role} />
      </div>
    )}
  </Dropdown>
);

class DropdownExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false };
  }

  render() {
    const { show } = this.state;
    return (
      <div className="dropdown-example">
        <DropdownButton
          show={show}
          onToggle={show => this.setState({ show })}
          title={`${show ? 'Close' : 'Open'} Dropdown`}
        />
        <DropdownButton alignEnd title="Align right" />

        <DropdownButton drop="up" title="Drop up" />
        <DropdownButton role="menu" title="Role 'menu'" />
      </div>
    );
  }
}

render(<DropdownExample />);
