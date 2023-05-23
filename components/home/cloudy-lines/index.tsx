import { Kinesis } from '@/components/animations/Kinesis';
import { Cloud } from '@/components/shared/Picto';

const data = [
    {
        label: 'Gagner du temps pour ce qui est important',
        color: 'orange',
    },
    {
        label: 'Garder de l’énergie mentale pour mes patients',
        color: 'green',
    },
    {
        label: 'Conserver ma sérénité pour ma santé',
        color: 'blue',
    },
    {
        label: 'Se rencontrer et s’entraider entre psychologues',
        color: 'white',
    },
];

export const CloudyLines = () => {
    return (
        <div className="cloudy-lines">
            {data.map((line, index) => (
                <Kinesis
                    className="cloudy-lines--kinesis"
                    subClassName={`line ${line.color}`}
                    speed={30}
                    key={index}
                    replaceOnLeave
                >
                    {/* <div className={`line ${line.color}`} key={index}> */}
                    {line.label}
                    {/* </div> */}
                </Kinesis>
            ))}
            <div className="cloud cloud-1">
                <Cloud />
            </div>
            <div className="cloud cloud-2">
                <Cloud />
            </div>
            <div className="cloud cloud-3">
                <Cloud />
            </div>
            <div className="cloud cloud-4">
                <Cloud />
            </div>
        </div>
    );
};
