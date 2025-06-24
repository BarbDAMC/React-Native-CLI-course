import { colors } from '../../config/theme/app-theme';

const buttonsListFirstRow = [
  {
    label: 'C',
    colors: colors.lightGray,
    blackText: true,
  },
  {
    label: '+/-',
    colors: colors.lightGray,
    blackText: true,
  },
  {
    label: 'del',
    blackText: true,
    colors: colors.lightGray,
  },
  {
    label: '÷',
    colors: colors.orange,
  }
];

const buttonsListSecondRow = [
  {
    label: '7',
    colors: colors.darkGray,
  },
  {
    label: '8',
    colors: colors.darkGray,
  },
  {
    label: '9',
    colors: colors.darkGray,
  },
  {
    label: 'x',
    colors: colors.orange,
  }
];

const buttonsListThirdRow = [
  {
    label: '4',
    colors: colors.darkGray,
  },
  {
    label: '5',
    colors: colors.darkGray,
  },
  {
    label: '6',
    colors: colors.darkGray,
  },
  {
    label: '-',
    colors: colors.orange,
  }
];

const buttonsListFourthRow = [
  {
    label: '1',
    colors: colors.darkGray,
  },
  {
    label: '2',
    colors: colors.darkGray,
  },
  {
    label: '3',
    colors: colors.darkGray,
  },
  {
    label: '+',
    colors: colors.orange,
  }
];

const buttonsListFifthRow = [
  {
    label: '0',
    colors: colors.darkGray,
    doubleSize: true,
  },
  {
    label: '.',
    colors: colors.darkGray,
  },
  {
    label: '=',
    colors: colors.orange,
  }
];

export const buttonsList = [
  buttonsListFirstRow,
  buttonsListSecondRow,
  buttonsListThirdRow,
  buttonsListFourthRow,
  buttonsListFifthRow
];
