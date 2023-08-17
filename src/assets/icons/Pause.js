import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Pause(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <Path d="M15 19q-.825 0-1.412-.587Q13 17.825 13 17V7q0-.825.588-1.412Q14.175 5 15 5h2q.825 0 1.413.588Q19 6.175 19 7v10q0 .825-.587 1.413Q17.825 19 17 19zm-8 0q-.825 0-1.412-.587Q5 17.825 5 17V7q0-.825.588-1.412Q6.175 5 7 5h2q.825 0 1.413.588Q11 6.175 11 7v10q0 .825-.587 1.413Q9.825 19 9 19z" />
    </Svg>
  );
}

export default Pause;
