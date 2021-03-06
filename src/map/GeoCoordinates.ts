/**
 * Copyright 2017 TomTom International B.V
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import GeometryUtils from './utils/GeometryUtils';

export default class GeoCoordinates {
    /** The longitude. */
    protected _longitude: number;

    /** The latitude. */
    protected _latitude: number;

    public static fromValues(longitude: number, latitude: number) {
        if (!GeometryUtils.checkCoordinateBounds(longitude, latitude)) {
            throw new Error('Coordinates out of bounds');
        }
        const geoCoordinates = new GeoCoordinates();
        geoCoordinates._longitude = longitude;
        geoCoordinates._latitude = latitude;
        return geoCoordinates;
    }

    public getLatitudeDeg() {
        return this._latitude;
    }

    public getLongitudeDeg() {
        return this._longitude;
    }
};
