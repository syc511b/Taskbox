import { mount } from '@vue/test-utils';

//import TaskList from '../../src/components/TaskList.vue';
import PureTaskList from '../../src/components/PureTaskList.vue';
import { WithPinnedTasks } from '../../src/components/PureTaskList.stories';
//👇 Our story imported here
//import { WithPinnedTasks } from '../../src/components/TaskList.stories';

test('renders pinned tasks at the start of the list', () => {
  //const wrapper = mount(TaskList, {
    //👇 Story's args used with our test
  //  propsData: WithPinnedTasks.args,
  //});
  const wrapper = mount(PureTaskList, {
       propsData: WithPinnedTasks.args,
     });
  const firstPinnedTask = wrapper.find('.list-item:nth-child(1).TASK_PINNED');
  expect(firstPinnedTask).not.toBe(null);
});