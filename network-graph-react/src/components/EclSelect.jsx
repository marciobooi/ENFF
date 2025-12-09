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
 * @param {object} [style] - Additional styles for the container
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
    style = {}
}) => (
    <div className="ecl-form-group" style={{ flex: 1, ...style }}>
        <label 
            htmlFor={id} 
            id={`${id}-label`}
            className="ecl-form-label"
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#404040',
                marginBottom: '4px'
            }}
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
            <div 
                className="ecl-help-block" 
                id={`${id}-helper`} 
                style={{ fontSize: '11px', color: '#666', marginBottom: '4px' }}
            >
                {helpText}
            </div>
        )}
        <div 
            className="ecl-select__container ecl-select__container--m" 
            style={{ position: 'relative', display: 'flex' }}
        >
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
                style={{
                    width: '100%',
                    padding: '8px 40px 8px 12px',
                    border: '1px solid #404040',
                    borderRadius: '4px 0 0 4px',
                    fontSize: '14px',
                    backgroundColor: disabled ? '#f5f5f5' : '#ffffff',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    opacity: disabled ? 0.6 : 1
                }}
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
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px',
                        border: '1px solid #404040',
                        borderLeft: 'none',
                        borderRadius: '0 4px 4px 0',
                        backgroundColor: disabled ? '#e0e0e0' : '#f5f5f5',
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        height: '100%'
                    }}
                >
                    <span className="ecl-button__container">
                        <span 
                            className="ecl-button__label" 
                            data-ecl-label="true" 
                            style={{ 
                                position: 'absolute', 
                                width: '1px', 
                                height: '1px', 
                                overflow: 'hidden', 
                                clip: 'rect(0,0,0,0)' 
                            }}
                        >
                            Toggle dropdown
                        </span>
                        <svg 
                            className="ecl-icon ecl-icon--xs ecl-icon--rotate-180 ecl-button__icon" 
                            focusable="false" 
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            style={{ width: '16px', height: '16px', fill: '#404040' }}
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
