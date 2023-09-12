import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Control, Controller } from 'react-hook-form'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

interface SelectProps {
  name: string;
  label: string;
  control: Control<any>,
  options: {
    label: string;
    value: string;
  }[]
}

const Select: React.FC<SelectProps> = ({ name, label, control, options }) => {
  const [selected, setSelected] = useState(options[0].label)

  return (
    <div className='field'>
      <label htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={options[0].value}
        render={({ field: { onChange } }) => (
          <Listbox value={selected} onChange={(e: any) => {
            onChange(e);
            setSelected(e);
          }}>
            {({ open }) => (
              <>
                <div className="relative">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2.5 pl-2 pr-10 font-medium text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">{selected}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {options.map(({ label, value }) => (
                        <Listbox.Option
                          key={value}
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-gray-300' : 'text-gray-900',
                              'relative cursor-default select-none py-3 pl-3 pr-9'
                            )
                          }
                          value={value}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                  {label}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className='absolute inset-y-0 right-0 flex items-center pr-4 text-black'
                                >
                                  <FontAwesomeIcon icon={faCheck} />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        )}
      />
    </div>
  )
}

export default Select