import { createElement } from 'lwc';
import AqsJestWireMock from 'c/aqsJestWireMock';
import getAccountList from '@salesforce/apex/AqsContactWireController.getAccountList';


// Realistic data with a list of contacts
const mockGetContactList = require('./data/getContactList.json');

// Mock getContactList Apex wire adapter
jest.mock(
    '@salesforce/apex/AqsContactWireController.getAccountList',
    () => {
        const {
            createApexTestWireAdapter
        } = require('@salesforce/sfdx-lwc-jest');
        return {
            default: createApexTestWireAdapter(jest.fn())
        };
    },
    { virtual: true }
);

// Datos simulados
const mockData = [
    { Id: '001', Name: 'Cuenta A' },
    { Id: '002', Name: 'Cuenta B' }
];

describe('c-aqs-jest-wire-mock', () => {
    afterEach(() => {
        jest.clearAllMocks();
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renderiza una lista de cuentas con éxito', async () => {
        // Simula éxito del wire
        //getAccountList.mockResolvedValue(mockGetContactList);

        const element = createElement('c-aqs-jest-wire-mock', {
            is: AqsJestWireMock
        });
        document.body.appendChild(element);

        getAccountList.emit(mockData);

        await Promise.resolve();
        await Promise.resolve();
        //await new Promise(setImmediate);

        const items = element.shadowRoot.querySelectorAll('li');
        expect(items.length).toBe(2);
        expect(items[0].textContent).toBe('Cuenta A');
        expect(items[1].textContent).toBe('Cuenta B');
    });


});
