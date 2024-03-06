import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScrollView} from 'react-native-gesture-handler';

const items = [
  {label: 'Dipa Majumdar', value: 'dipa majumdar'},
  {label: 'Firoza Parveen', value: 'firoza parveen'},
  {label: 'Shishir Jha', value: 'shishir jha'},
];

const EscalationMatrix = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [currentValue1, setCurrentValue1] = useState('');
  const [isOpen2, setIsOpen2] = useState(false);
  const [currentValue2, setCurrentValue2] = useState('');
  const [isOpen3, setIsOpen3] = useState(false);
  const [currentValue3, setCurrentValue3] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 20, marginVertical: 10}}>
            Operational Escalation Matrix
          </Text>
          <View style={[styles.row, styles.header]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Escalation Level</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Name</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Role</Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Level 1</Text>
            </View>
            <View style={[styles.cell]}>
              <DropDownPicker
                style={{borderWidth: 0, backgroundColor: 'transparent'}}
                items={items}
                open={isOpen1}
                setOpen={() => setIsOpen1(!isOpen1)}
                value={currentValue1}
                setValue={val => setCurrentValue1(val)}
                placeholder="Select"
                showTickIcon={false}
                disableBorderRadius={true}
              />
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Project Manager</Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Level 2</Text>
            </View>
            <View style={[styles.cell]}>
              <DropDownPicker
                style={{borderWidth: 0, backgroundColor: 'transparent'}}
                items={items}
                open={isOpen2}
                setOpen={() => setIsOpen2(!isOpen2)}
                value={currentValue2}
                setValue={val => setCurrentValue2(val)}
                placeholder="Select"
                showTickIcon={false}
                disableBorderRadius={true}
              />
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Project Manager</Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Level 3</Text>
            </View>
            <View style={[styles.cell]}>
              <DropDownPicker
                style={{
                  borderWidth: 0,
                  backgroundColor: 'transparent',
                  zIndex: 99,
                }}
                items={items}
                open={isOpen3}
                setOpen={() => setIsOpen3(!isOpen3)}
                value={currentValue3}
                setValue={val => setCurrentValue3(val)}
                placeholder="Select"
                showTickIcon={false}
                disableBorderRadius={true}
              />
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Project Manager</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{fontSize: 20, marginVertical: 10}}>
            Financial Escalation Matrix
          </Text>
          <View style={[styles.row, styles.header]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Escalation Level</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Name</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Role</Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Level 1</Text>
            </View>
            <View style={[styles.cell]}>
              <DropDownPicker
                style={{borderWidth: 0, backgroundColor: 'transparent'}}
                items={items}
                open={isOpen1}
                setOpen={() => setIsOpen1(!isOpen1)}
                value={currentValue1}
                setValue={val => setCurrentValue1(val)}
                placeholder="Select"
                showTickIcon={false}
                disableBorderRadius={true}
              />
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Project Manager</Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Level 2</Text>
            </View>
            <View style={[styles.cell]}>
              <DropDownPicker
                style={{borderWidth: 0, backgroundColor: 'transparent'}}
                items={items}
                open={isOpen2}
                setOpen={() => setIsOpen2(!isOpen2)}
                value={currentValue2}
                setValue={val => setCurrentValue2(val)}
                placeholder="Select"
                showTickIcon={false}
                disableBorderRadius={true}
              />
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Project Manager</Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Level 3</Text>
            </View>
            <View style={[styles.cell]}>
              <DropDownPicker
                style={{
                  borderWidth: 0,
                  backgroundColor: 'transparent',
                  zIndex: 99,
                }}
                items={items}
                open={isOpen3}
                setOpen={() => setIsOpen3(!isOpen3)}
                value={currentValue3}
                setValue={val => setCurrentValue3(val)}
                placeholder="Select"
                showTickIcon={false}
                disableBorderRadius={true}
              />
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Project Manager</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{fontSize: 20, marginVertical: 10}}>
            Technical Escalation Matrix
          </Text>
          <View style={[styles.row, styles.header]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Escalation Level</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Name</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Role</Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Level 1</Text>
            </View>
            <View style={[styles.cell]}>
              <DropDownPicker
                style={{borderWidth: 0, backgroundColor: 'transparent'}}
                items={items}
                open={isOpen1}
                setOpen={() => setIsOpen1(!isOpen1)}
                value={currentValue1}
                setValue={val => setCurrentValue1(val)}
                placeholder="Select"
                showTickIcon={false}
                disableBorderRadius={true}
              />
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Project Manager</Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Level 2</Text>
            </View>
            <View style={[styles.cell]}>
              <DropDownPicker
                style={{borderWidth: 0, backgroundColor: 'transparent'}}
                items={items}
                open={isOpen2}
                setOpen={() => setIsOpen2(!isOpen2)}
                value={currentValue2}
                setValue={val => setCurrentValue2(val)}
                placeholder="Select"
                showTickIcon={false}
                disableBorderRadius={true}
              />
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Project Manager</Text>
            </View>
          </View>

          <View style={[styles.row, {alignItems: 'center'}]}>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Level 3</Text>
            </View>
            <View style={[styles.cell]}>
              <DropDownPicker
                style={{
                  borderWidth: 0,
                  backgroundColor: 'transparent',
                  zIndex: 99,
                }}
                items={items}
                open={isOpen3}
                setOpen={() => setIsOpen3(!isOpen3)}
                value={currentValue3}
                setValue={val => setCurrentValue3(val)}
                placeholder="Select"
                showTickIcon={false}
                disableBorderRadius={true}
              />
            </View>
            <View style={styles.cell}>
              <Text style={styles.cellText}>Project Manager</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 150,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: 'lightgray',
  },
  cell: {
    flex: 1,
    padding: 8,
  },
  cellText: {
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#007bff',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 120,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default EscalationMatrix;
