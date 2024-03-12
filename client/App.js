import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './Dashboard/Component/navBar';
import Body from './Dashboard/Pages/Body';
import Footer from './Dashboard/Pages/Footer';
import { useEffect, useState } from 'react';
import "./styles.css"

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [listProject, setListProject] = useState([]);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [listList, setListList]= useState([])
  const OpenNav = () => {
    setIsNavOpen(!isNavOpen);
  }
  const createProject = () => {
    setListProject([...listProject, {}]);
  }
  const deleteProject = (index) => {
    setListProject(listProject.filter((project, i) => i !== index));
  }
  const deleteOpen = () => {
    setDeleteOpen(!isDeleteOpen);
  }
<<<<<<< HEAD

  useEffect(() => {
  }, [isNavOpen])

=======
  const deleteCard = (index) => {
    setListCard(listList.filter((project, i) => i !== index));
  }
  console.log(isDeleteOpen)
>>>>>>> main
  return (
    <View style={headerStyle.container}>
      <NavBar openNav={OpenNav} />
      <Body openNav={OpenNav} isNavOpen={isNavOpen} createProject={createProject} listProject={listProject} deleteProject={deleteProject} deleteOpen={deleteOpen} isDeleteOpen={isDeleteOpen} />
      {/* <Footer/> */}
    </View>
  );
}


const headerStyle = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'collapse',
  },

});