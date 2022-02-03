import { TabWrapper } from "./styles";

function TabItem({ active, children }) {
  return (
    <TabWrapper
      aria-label="main-nav-item"
      className={active ? 'active' : ''}
    >
      {children}
    </TabWrapper>
  );
}

export default TabItem;

