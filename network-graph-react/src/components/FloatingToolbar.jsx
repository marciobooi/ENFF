import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import balanceCodes from '../data/balanceCodes';

// Country options for geo parameter
const COUNTRIES = [
    { code: 'EU27_2020', label: 'EU 27' },
    { code: 'EA20', label: 'Euro area - 20' },
    { code: 'AT', label: 'Austria' },
    { code: 'BE', label: 'Belgium' },
    { code: 'BG', label: 'Bulgaria' },
    { code: 'CY', label: 'Cyprus' },
    { code: 'CZ', label: 'Czechia' },
    { code: 'DE', label: 'Germany' },
    { code: 'DK', label: 'Denmark' },
    { code: 'EE', label: 'Estonia' },
    { code: 'EL', label: 'Greece' },
    { code: 'ES', label: 'Spain' },
    { code: 'FI', label: 'Finland' },
    { code: 'FR', label: 'France' },
    { code: 'HR', label: 'Croatia' },
    { code: 'HU', label: 'Hungary' },
    { code: 'IE', label: 'Ireland' },
    { code: 'IT', label: 'Italy' },
    { code: 'LT', label: 'Lithuania' },
    { code: 'LU', label: 'Luxembourg' },
    { code: 'LV', label: 'Latvia' },
    { code: 'MT', label: 'Malta' },
    { code: 'NL', label: 'Netherlands' },
    { code: 'PL', label: 'Poland' },
    { code: 'PT', label: 'Portugal' },
    { code: 'RO', label: 'Romania' },
    { code: 'SE', label: 'Sweden' },
    { code: 'SI', label: 'Slovenia' },
    { code: 'SK', label: 'Slovakia' }
];

// Years available
const YEARS = Array.from({ length: 34 }, (_, i) => ({
    code: String(2023 - i),
    label: String(2023 - i)
}));

// Unit options
const UNITS = [
    { code: 'KTOE', label: 'KTOE (Thousand tonnes of oil equivalent)' },
    { code: 'TJ', label: 'TJ (Terajoule)' },
    { code: 'GWH', label: 'GWh (Gigawatt hour)' }
];

// Decimal options
const DECIMALS = [
    { code: 0, label: 'No decimals' },
    { code: 1, label: '1 decimal' },
    { code: 2, label: '2 decimals' },
    { code: 3, label: '3 decimals' }
];

// SVG Icons as components
const GlobeIcon = () => (
    <svg className="ecl-icon ecl-icon--s" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
);

const ChartIcon = () => (
    <svg className="ecl-icon ecl-icon--s" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
    </svg>
);

const CalendarIcon = () => (
    <svg className="ecl-icon ecl-icon--s" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
    </svg>
);

const UnitIcon = () => (
    <svg className="ecl-icon ecl-icon--s" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"/>
    </svg>
);

const DecimalIcon = () => (
    <svg className="ecl-icon ecl-icon--s" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7h-3V5h5v13z"/>
    </svg>
);

const DragIcon = () => (
    <svg className="ecl-icon ecl-icon--s" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
);

const ApplyIcon = () => (
    <svg className="ecl-icon ecl-icon--s" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
);

const CollapseIcon = ({ expanded }) => (
    <svg className="ecl-icon ecl-icon--s" viewBox="0 0 24 24" aria-hidden="true" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
    </svg>
);

const FloatingToolbar = ({ config, onConfigChange, onApply }) => {
    const [position, setPosition] = useState({ x: 20, y: 20 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const toolbarRef = useRef(null);
    const dragHandleRef = useRef(null);

    // Handle drag start
    const handleDragStart = useCallback((e) => {
        if (e.target.closest('.ecl-select') || e.target.closest('button:not(.toolbar-drag-handle)')) return;
        
        const rect = toolbarRef.current.getBoundingClientRect();
        setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
        setIsDragging(true);
        e.preventDefault();
    }, []);

    // Handle drag move
    useEffect(() => {
        if (!isDragging) return;

        const handleMouseMove = (e) => {
            const newX = Math.max(0, Math.min(window.innerWidth - 400, e.clientX - dragOffset.x));
            const newY = Math.max(0, Math.min(window.innerHeight - 100, e.clientY - dragOffset.y));
            setPosition({ x: newX, y: newY });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragOffset]);

    // Keyboard navigation for the toolbar
    const handleToolbarKeyDown = useCallback((e) => {
        const focusableElements = toolbarRef.current?.querySelectorAll(
            'button, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements?.length) return;

        const currentIndex = Array.from(focusableElements).indexOf(document.activeElement);

        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % focusableElements.length;
                focusableElements[nextIndex]?.focus();
                setFocusedIndex(nextIndex);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
                focusableElements[prevIndex]?.focus();
                setFocusedIndex(prevIndex);
                break;
            case 'Home':
                e.preventDefault();
                focusableElements[0]?.focus();
                setFocusedIndex(0);
                break;
            case 'End':
                e.preventDefault();
                focusableElements[focusableElements.length - 1]?.focus();
                setFocusedIndex(focusableElements.length - 1);
                break;
            case 'Escape':
                e.preventDefault();
                if (activeDropdown) {
                    setActiveDropdown(null);
                } else if (isExpanded) {
                    setIsExpanded(false);
                }
                break;
            case 'Enter':
                // Toggle expand/collapse when focus is on the toolbar header (not on form elements)
                if (e.target.closest('.toolbar-drag-handle') && !e.target.closest('button')) {
                    e.preventDefault();
                    setIsExpanded(!isExpanded);
                }
                break;
            default:
                break;
        }
    }, [activeDropdown, isExpanded]);

    // Handle keyboard drag
    const handleDragKeyDown = useCallback((e) => {
        const step = e.shiftKey ? 50 : 10;
        switch (e.key) {
            case 'ArrowRight':
                e.preventDefault();
                setPosition(prev => ({ ...prev, x: Math.min(window.innerWidth - 400, prev.x + step) }));
                break;
            case 'ArrowLeft':
                e.preventDefault();
                setPosition(prev => ({ ...prev, x: Math.max(0, prev.x - step) }));
                break;
            case 'ArrowDown':
                e.preventDefault();
                setPosition(prev => ({ ...prev, y: Math.min(window.innerHeight - 100, prev.y + step) }));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setPosition(prev => ({ ...prev, y: Math.max(0, prev.y - step) }));
                break;
            default:
                break;
        }
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (activeDropdown && !e.target.closest('.ecl-select')) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [activeDropdown]);

    // Handle config change
    const handleChange = (key, value) => {
        onConfigChange({ ...config, [key]: value });
    };

    const toolbarContent = (
        <div
            ref={toolbarRef}
            role="toolbar"
            aria-label="Chart configuration toolbar"
            aria-orientation="horizontal"
            onKeyDown={handleToolbarKeyDown}
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex: 9999,
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 68, 148, 0.1)',
                cursor: isDragging ? 'grabbing' : 'default',
                userSelect: 'none',
                minWidth: isExpanded ? '380px' : 'auto',
                transition: isDragging ? 'none' : 'box-shadow 0.2s',
                fontFamily: 'Arial, sans-serif'
            }}
        >
            {/* Toolbar Header with Drag Handle */}
            <div
                ref={dragHandleRef}
                className="toolbar-drag-handle"
                onMouseDown={handleDragStart}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    backgroundColor: '#004494',
                    borderRadius: '8px 8px 0 0',
                    color: '#ffffff',
                    cursor: isDragging ? 'grabbing' : 'grab'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                        type="button"
                        aria-label="Drag to reposition toolbar. Use arrow keys when focused."
                        onKeyDown={handleDragKeyDown}
                        style={{
                            background: 'none',
                            border: 'none',
                            padding: '4px',
                            cursor: 'grab',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <DragIcon />
                    </button>
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>Chart Settings</span>
                </div>
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? 'Collapse toolbar' : 'Expand toolbar'}
                    style={{
                        background: 'none',
                        border: 'none',
                        padding: '4px',
                        cursor: 'pointer',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <CollapseIcon expanded={isExpanded} />
                </button>
            </div>

            {/* Toolbar Content */}
            {isExpanded && (
                <div style={{ padding: '16px' }}>
                    {/* Row 1: Country and Balance */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                        {/* Country Select */}
                        <div className="ecl-form-group" style={{ flex: 1 }}>
                            <label 
                                className="ecl-form-label" 
                                htmlFor="geo-select"
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
                                <GlobeIcon />
                                Country
                            </label>
                            <select
                                id="geo-select"
                                className="ecl-select"
                                value={config.geo}
                                onChange={(e) => handleChange('geo', e.target.value)}
                                aria-describedby="geo-help"
                                style={{
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid #404040',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    backgroundColor: '#ffffff',
                                    cursor: 'pointer'
                                }}
                            >
                                {COUNTRIES.map(c => (
                                    <option key={c.code} value={c.code}>{c.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Balance Select */}
                        <div className="ecl-form-group" style={{ flex: 1 }}>
                            <label 
                                className="ecl-form-label" 
                                htmlFor="balance-select"
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
                                <ChartIcon />
                                Balance
                            </label>
                            <select
                                id="balance-select"
                                className="ecl-select"
                                value={config.nrg_bal}
                                onChange={(e) => handleChange('nrg_bal', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid #404040',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    backgroundColor: '#ffffff',
                                    cursor: 'pointer'
                                }}
                            >
                                {balanceCodes.map(b => (
                                    <option key={b.code} value={b.code}>{b.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Row 2: Year and Unit */}
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                        {/* Year Select */}
                        <div className="ecl-form-group" style={{ flex: 1 }}>
                            <label 
                                className="ecl-form-label" 
                                htmlFor="year-select"
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
                                <CalendarIcon />
                                Year
                            </label>
                            <select
                                id="year-select"
                                className="ecl-select"
                                value={config.time}
                                onChange={(e) => handleChange('time', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid #404040',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    backgroundColor: '#ffffff',
                                    cursor: 'pointer'
                                }}
                            >
                                {YEARS.map(y => (
                                    <option key={y.code} value={y.code}>{y.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Unit Select */}
                        <div className="ecl-form-group" style={{ flex: 1 }}>
                            <label 
                                className="ecl-form-label" 
                                htmlFor="unit-select"
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
                                <UnitIcon />
                                Unit
                            </label>
                            <select
                                id="unit-select"
                                className="ecl-select"
                                value={config.unit}
                                onChange={(e) => handleChange('unit', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid #404040',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    backgroundColor: '#ffffff',
                                    cursor: 'pointer'
                                }}
                            >
                                {UNITS.map(u => (
                                    <option key={u.code} value={u.code}>{u.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Row 3: Decimals and Apply */}
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
                        {/* Decimals Select */}
                        <div className="ecl-form-group" style={{ flex: 1 }}>
                            <label 
                                className="ecl-form-label" 
                                htmlFor="decimals-select"
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
                                <DecimalIcon />
                                Decimals
                            </label>
                            <select
                                id="decimals-select"
                                className="ecl-select"
                                value={config.decimals}
                                onChange={(e) => handleChange('decimals', Number(e.target.value))}
                                style={{
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid #404040',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    backgroundColor: '#ffffff',
                                    cursor: 'pointer'
                                }}
                            >
                                {DECIMALS.map(d => (
                                    <option key={d.code} value={d.code}>{d.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Apply Button */}
                        <button
                            type="button"
                            className="ecl-button ecl-button--primary"
                            onClick={onApply}
                            aria-label="Apply chart settings"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 20px',
                                backgroundColor: '#004494',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '4px',
                                fontSize: '14px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s',
                                whiteSpace: 'nowrap'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#003078'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#004494'}
                        >
                            <ApplyIcon />
                            Apply
                        </button>
                    </div>

                    {/* Current Config Summary */}
                    <div 
                        role="status" 
                        aria-live="polite"
                        style={{
                            marginTop: '12px',
                            padding: '8px 12px',
                            backgroundColor: '#f5f5f5',
                            borderRadius: '4px',
                            fontSize: '11px',
                            color: '#666',
                            textAlign: 'center'
                        }}
                    >
                        {COUNTRIES.find(c => c.code === config.geo)?.label} • {config.time} • {config.unit} • {balanceCodes.find(b => b.code === config.nrg_bal)?.label}
                    </div>
                </div>
            )}

            {/* Collapsed State */}
            {!isExpanded && (
                <div 
                    role="button"
                    tabIndex={0}
                    onClick={() => setIsExpanded(true)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setIsExpanded(true);
                        }
                    }}
                    aria-label="Click or press Enter to expand toolbar settings"
                    style={{ 
                        padding: '8px 12px',
                        fontSize: '12px',
                        color: '#666',
                        textAlign: 'center',
                        cursor: 'pointer'
                    }}
                >
                    {COUNTRIES.find(c => c.code === config.geo)?.label} • {config.time} • Click to expand
                </div>
            )}
        </div>
    );

    return createPortal(toolbarContent, document.body);
};

export default FloatingToolbar;
