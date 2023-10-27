import dataTabs from "../data/tabs.json";

const sortTabs = () => {
  dataTabs.sort((a, b) => a.order - b.order);
};

export default sortTabs;
