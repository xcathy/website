import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export function TabBarIcon(name: IconDefinition, color?: string ) : React.JSX.Element {
  return <FontAwesomeIcon icon = { name } size={27} style={ { margin: 5, color: color }} /> as React.JSX.Element;
}
