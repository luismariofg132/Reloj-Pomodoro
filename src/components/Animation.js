import { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingsContext } from '../components/Settings'
const CountdownAnimation = ({ timer, animate, children }) => {

    const { stopAimate } = useContext(SettingsContext)

    return (
        <CountdownCircleTimer

            isPlaying={animate}
            duration={timer * 60}
            colors={[
                ['#FE6F6B', 0.33],
                ['#FE6F6B', 0.33],
                ['#FE6F6B', 0.33],
            ]}
            strokeWidth={6}
            size={220}
            trailColor="#151932"
            onComplete={() => {
                stopAimate()
            }}
        >
            {children}
        </CountdownCircleTimer>
    )
}

export default CountdownAnimation