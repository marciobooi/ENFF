import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import definitions from '../data/definitions';

// Inline SVG Icons (ECL style)
const CloseIcon = () => (
    <svg 
        className="ecl-icon ecl-icon--m ecl-button__icon"
        aria-hidden="true" 
        focusable="false"
    >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
);

const InfoIcon = () => (
    <svg 
        className="ecl-icon ecl-icon--m"
        aria-hidden="true" 
        focusable="false"
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
    </svg>
);

const NodeDetailModal = ({ open, node, onClose, unit = 'KTOE', decimals = 0 }) => {
    // Handle ESC key to close modal
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose?.();
        };
        if (open) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open || !node) return null;

    const modalContent = (
        <dialog 
            className="ecl-modal ecl-modal--l"
            aria-modal="true"
            aria-labelledby="modal-node-header"
            open

            onClick={(e) => {
                if (e.target === e.currentTarget) onClose?.();
            }}
        >
            <div className="ecl-modal__container">
                <div className="ecl-modal__content ecl-container">
                    {/* ECL Modal Header */}
                    <header className="ecl-modal__header">
                        <div className="ecl-modal__header-content" id="modal-node-header">
                            {node.name || node.id}
                        </div>
                        <button 
                            className="ecl-button ecl-button--tertiary ecl-modal__close ecl-button--icon-only" 
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <span className="ecl-button__container">
                                <span className="ecl-button__label" data-ecl-label="true">Close</span>
                                <CloseIcon />
                            </span>
                        </button>
                    </header>

                    {/* ECL Modal Body */}
                    <div className="ecl-modal__body">
                        <div className="ecl-modal__body-scroll">
                            {/* Description List */}
                            <dl className="ecl-description-list ecl-description-list--horizontal">
                                <dt className="ecl-description-list__term">SIEC Code</dt>
                                <dd className="ecl-description-list__definition">
                                    <code className="ecl-u-type-color-primary">{node.id}</code>
                                </dd>

                                {typeof node.value === 'number' && node.value > 0 && (
                                    <>
                                        <dt className="ecl-description-list__term">Energy Supply</dt>
                                        <dd className="ecl-description-list__definition">
                                            <strong>{node.value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</strong>
                                            <span className="ecl-u-type-color-grey"> {unit}</span>
                                        </dd>
                                    </>
                                )}

                                {typeof node.depth === 'number' && (
                                    <>
                                        <dt className="ecl-description-list__term">Hierarchy Level</dt>
                                        <dd className="ecl-description-list__definition">Level {node.depth}</dd>
                                    </>
                                )}
                            </dl>

                            {/* Definition Section */}
                            {definitions[node.id] && (
                                <div className="ecl-u-mt-l">
                                    <h3 className="ecl-u-type-heading-3 ecl-u-mb-m">Definition</h3>
                                    <p className="ecl-u-type-paragraph-m" style={{ whiteSpace: 'pre-line' }}>
                                        {definitions[node.id]}
                                    </p>
                                </div>
                            )}

                            {/* Info Message */}
                            <div className="ecl-u-mt-l">
                                <div className="ecl-message ecl-message--info" role="alert">
                                    <InfoIcon />
                                    <div className="ecl-message__content">
                                        <p className="ecl-message__description">
                                            Data from Eurostat NRG_BAL_C energy balance dataset.
                                            Values are displayed in {unit}.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ECL Modal Footer */}
                    <footer className="ecl-modal__footer">
                        <div className="ecl-modal__footer-content">
                            <button 
                                className="ecl-button ecl-button--primary ecl-modal__button" 
                                type="button"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </dialog>
    );

    return createPortal(modalContent, document.body);
};

export default NodeDetailModal;
