import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopPlayers } from '../redux/chess/chessSlice';
import Table from 'react-bootstrap/Table';
import styles from './Leaderboard.module.css';
import { Badge, Container } from 'react-bootstrap';

const Leaderboard = () => {
  const topPlayers = useSelector((state) => state.chess.leaderboardData);
  const status = useSelector((state) => state.chess.leaderboardStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getTopPlayers());
  }, [status, dispatch]);

  return (
    <Container
      fluid
      style={{ backgroundColor: '#530000', minHeight: '100vh ' }}
    >
      <h2 className="text-light text-center">Top Players on Chess.com</h2>

      <Table striped bordered variant="dark" responsive>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Profile</th>
            <th>Username</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Win%</th>
          </tr>
        </thead>
        <tbody>
          {topPlayers.map((p) => (
            <tr key={p.player_id} className="text-center">
              <td>{p.rank}</td>
              <td>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  title="View Profile"
                >
                  <img
                    className={styles.avatar}
                    src={p.avatar}
                    alt={p.username}
                  />
                </a>
              </td>
              <td>{p.username}</td>
              <td>
                <Badge bg="success">{p.title}</Badge>
              </td>
              <td>{p.score}</td>
              <td>
                {(
                  (p.win_count /
                    (p.win_count + p.loss_count + p.draw_count)) *
                  100
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Container>
  );
};

export default Leaderboard;
