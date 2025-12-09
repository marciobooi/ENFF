import React from 'react';

/**
 * Reusable ECL Select Component matching ECL library structure
 * @param {string} id - Unique identifier for the select element
 * @param {string} label - Label text for the select
 * @param {React.ComponentType} [icon] - Optional icon component to display before label
 * @param {string|number} value - Current selected value
 * @param {function} onChange - Change handler function
 * @param {Array<{code: string|number, label: string}>} options - Array of options
 * @param {string} [helpText] - Optional helper text below label
 * @param {boolean} [required] - Whether the field is required
 * @param {boolean} [disabled] - Whether the select is disabled
 * @param {string} [className] - Additional class names for the container
 */
const EclSelect = ({ 
    id, 
    label, 
    icon: Icon, 
    value, 
    onChange, 
    options, 
    helpText,
    required = false,
    disabled = false,
    className = ''
}) => (
    <div className={`ecl-form-group ${className}`}>
        <label 
            htmlFor={id} 
            id={`${id}-label`}
            className="ecl-form-label"
        >
            {Icon && <Icon />}
            {label}
            {required && (
                <span className="ecl-form-label__required" role="note" aria-label="required">
                    *
                </span>
            )}
        </label>
        {helpText && (
            <div className="ecl-help-block" id={`${id}-helper`}>
                {helpText}
            </div>
        )}
        <div className="ecl-select__container ecl-select__container--m">
            <select
                className="ecl-select"
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
                required={required}
                aria-describedby={helpText ? `${id}-helper` : undefined}
                data-ecl-auto-init="Select"
            >
                {options.map(opt => (
                    <option 
                        key={opt.code} 
                        value={opt.code} 
                        aria-label={opt.label}
                        disabled={opt.disabled}
                    >
                        {opt.label}
                    </option>
                ))}
            </select>
            <div className="ecl-select__icon">
                <button 
                    className="ecl-button ecl-button--ghost ecl-button--icon-only" 
                    type="button" 
                    tabIndex={-1}
                    disabled={disabled}
                >
                    <span className="ecl-button__container">
                        <span className="ecl-button__label" data-ecl-label="true">
                            Toggle dropdown
                        </span>
                        <svg 
                            className="ecl-icon ecl-icon--xs ecl-icon--rotate-180 ecl-button__icon" 
                            focusable="false" 
                            aria-hidden="true"
                            data-ecl-icon=""
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
);

export default EclSelect;
