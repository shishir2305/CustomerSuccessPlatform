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
  const [isOpen4, setIsOpen4] = useState(false);
  const [currentValue4, setCurrentValue4] = useState('');
  const [isOpen5, setIsOpen5] = useState(false);
  const [currentValue5, setCurrentValue5] = useState('');
  const [isOpen6, setIsOpen6] = useState(false);
  const [currentValue6, setCurrentValue6] = useState('');
  const [isOpen7, setIsOpen7] = useState(false);
  const [currentValue7, setCurrentValue7] = useState('');
  const [isOpen8, setIsOpen8] = useState(false);
  const [currentValue8, setCurrentValue8] = useState('');
  const [isOpen9, setIsOpen9] = useState(false);
  const [currentValue9, setCurrentValue9] = useState('');

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

          <View
            style={[
              styles.row,
              {alignItems: 'center'},
              isOpen1 && {marginTop: 100},
            ]}>
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
                open={isOpen4}
                setOpen={() => setIsOpen4(!isOpen4)}
                value={currentValue1}
                setValue={val => setCurrentValue4(val)}
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
                open={isOpen5}
                setOpen={() => setIsOpen5(!isOpen5)}
                value={currentValue5}
                setValue={val => setCurrentValue5(val)}
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
                open={isOpen6}
                setOpen={() => setIsOpen6(!isOpen6)}
                value={currentValue6}
                setValue={val => setCurrentValue6(val)}
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
                open={isOpen7}
                setOpen={() => setIsOpen7(!isOpen7)}
                value={currentValue7}
                setValue={val => setCurrentValue7(val)}
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
                open={isOpen8}
                setOpen={() => setIsOpen8(!isOpen8)}
                value={currentValue8}
                setValue={val => setCurrentValue8(val)}
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
                }}
                items={items}
                open={isOpen9}
                setOpen={() => setIsOpen9(!isOpen9)}
                value={currentValue9}
                setValue={val => setCurrentValue9(val)}
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
