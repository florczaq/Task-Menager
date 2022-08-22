import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { readData, saveData } from '../../../storage/LocalDataStorage';
import { taskList as styles } from '../../styles/Styles';
import Task from './Task';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }

  reloadTasks = () => {
    readData({ key: "taskList" })
      .then(res => this.setState({ tasks: res }))
  }

  componentDidMount = () => this.reloadTasks();

  onDelete = (id) => {
    const newList = this.state.tasks.filter((element, index) => { return index != id })

    saveData({
      key: "taskList",
      data: newList
    })
    this.setState({ tasks: newList })
    this.reloadTasks();
  }

  renderItems = () => this.state.tasks.map((task, i) => (
    <Task {...task} key={i} id={i} onDelete={this.onDelete} />
  ))

  render() {
    return (
      <ScrollView scrollEnabled style={styles.scrollView} contentContainerStyle={{
        alignItems: "center"
      }}>
        <View style={styles.taskContainer}>
          {this.state.tasks.length ?
            this.renderItems() :
            <View style={styles.emptyList}>
              <Text style={styles.emptyListText}>No task created.</Text>
            </View>
          }
        </View>
      </ScrollView>
    );
  }
};

export default TaskList;