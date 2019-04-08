// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Card from '../Card/Card';

export const Locations = (props) => {
    const { locations } = props;
    return (
        <div className="bx--grid">
            <div className="bx--row">
                { locations.map(item => (
                    <div key={item.id} className="bx--col-md-4 bx--col-lg-4">
                        <Card key={item.id} item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    locations: state.locations
});

Locations.propTypes = {
    locations: PropTypes.array.isRequired
};

export default connect(mapStateToProps, null)(Locations);
