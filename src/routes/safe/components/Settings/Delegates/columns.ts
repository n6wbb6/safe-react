import { TableCellProps } from '@material-ui/core/TableCell/TableCell'

export const DELEGATE_ADDRESS_ID = 'delegate'
export const DELEGATOR_ADDRESS_ID = 'delegator'
export const DELEGATE_LABEL_ID = 'label'
export const ACTIONS_ID = 'actions'
export const EDIT_DELEGATE_BUTTON = 'edit-entry-btn'
export const REMOVE_DELEGATE_BUTTON = 'remove-entry-btn'

type DelegatesTableColumn = {
  id: string
  label: string
  width?: number
  custom?: boolean
  align?: TableCellProps['align']
}

export const generateColumns = (): Array<DelegatesTableColumn> => {
  const delegateColumn = {
    id: DELEGATE_ADDRESS_ID,
    label: 'Delegate',
    width: 150,
    custom: false,
    align: 'left',
  }

  const delegatorColumn = {
    id: DELEGATOR_ADDRESS_ID,
    label: 'Delegator',
    width: 150,
    custom: false,
    align: 'left',
  }

  const labelColumn = {
    id: DELEGATE_LABEL_ID,
    label: 'Label',
    custom: false,
  }

  const actionsColumn = {
    id: ACTIONS_ID,
    label: '',
    custom: true,
  }

  return [delegateColumn, delegatorColumn, labelColumn, actionsColumn]
}
