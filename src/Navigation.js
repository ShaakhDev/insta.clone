import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import FancyRoute from './components/tools/FancyRoute';
import { isMobile } from 'react-device-detect';
import MobileCurrentPost from './pages/MobileCurrentPost';

function Navigation() {
    return (
        <Routes>
            {ROUTES.map((route, i) => {
                return (
                    <Route
                        key={i}
                        path={route.path}
                        element={
                            <FancyRoute>
                                <route.element />
                            </FancyRoute>
                        }
                    />
                );
            })}
            {isMobile && (
                <Route
                    path="/post/view/:postId"
                    element={
                        <FancyRoute>
                            <MobileCurrentPost />
                        </FancyRoute>
                    }
                />
            )}
        </Routes>
    );
}
export default Navigation;
