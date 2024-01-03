import { Event, Tracking } from './tracking';

describe('Tracking', () => {
    let fnMock: jest.Mock;
    let tracking: Tracking;

    beforeEach(() => {
        fnMock = jest.fn();
        tracking = new Tracking((event, params) => fnMock(event, params), true);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call logEvent with the default params when event is called', () => {
        // Arrange
        const event: Event = { name: 'test', params: {} };

        // Act
        tracking.event(event);

        // Assert
        expect(fnMock).toHaveBeenCalledWith('test', {
            path: '/',
            os: 'Unknown OS',
            host: 'localhost',
            project: 'localhost',
        });
    });

    it('should call logEvent with the default and event params when event is called', () => {
        // Arrange
        const event: Event = { name: 'test', params: { foo: 'bar' } };

        // Act
        tracking.event(event);

        // Assert
        expect(fnMock).toHaveBeenCalledWith('test', {
            path: '/',
            foo: 'bar',
            os: 'Unknown OS',
            host: 'localhost',
            project: 'localhost',
        });
    });

    it('should not call logEvent when isProd is false', () => {
        // Arrange
        const event: Event = { name: 'test', params: {} };
        tracking = new Tracking((event, params) => fnMock(event, params), false);

        // Act
        tracking.event(event);

        // Assert
        expect(fnMock).not.toHaveBeenCalled();
    });
});