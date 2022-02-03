import { TabWrapper } from "./styles";

function TabItem({ active, children, name, onClick }) {
  return (
    <button name={name} onClick={onClick}>
      <TabWrapper
        aria-label="main-nav-item"
        className={active ? 'active' : ''}
        >
        {children}
      </TabWrapper>
    </button>
  );
}

export default TabItem;

